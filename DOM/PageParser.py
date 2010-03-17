import sys, os, re
import traceback
from sgmllib import SGMLParser, SGMLParseError

import dataetc
from honeyjs import Runtime
from ActiveX.ActiveX import *  
from HTTP.HttpHoneyClient import HttpHoneyClient
from DOMObject import DOMObject 

class PageParser(SGMLParser):
    def __init__(self, window, document, html):
        SGMLParser.__init__(self)
        self.DOM_stack  = [document] # doc is usually document, but if the parser is called by document.write, doc is the script object
        self.html_fix(html)
        self.current    = 0
        self.text       = ''
        self.script     = """
                            window.eval = eval;
                            function CollectGarbage() {};
                            function Image() {};
                            function quit() {};
                            function prompt() {};
                        """
        self.in_Script  = False
        self.endearly   = False # for some cases, such as location is changed, the parser will stop early.
        self.__dict__['__window'] = window
        self.ignoreObj  = False
        self.ignoreScript = False
        try:
            self.feed(self.html)
        except:
            traceback.print_exc()

    def html_fix(self, html):
        self.html = ''
        for line in html.split('\n'):
            if re.search(r'<\w', line) and not re.search(r'>', line):
                self.html += re.sub('<', "< ", line)
                continue
            
            self.html += line
            self.html += '\n'

    def object_fix(self, attrs):
        tagtext  = SGMLParser.get_starttag_text(self)
        stagtext = tagtext.split("+")

        if len(stagtext) == 1:
            return attrs

        fixed_attrs = []
        value = ""
        for p in stagtext:
            value += p.strip().strip("\"").strip("\'")

        t = value.lstrip("<object").split(">")[0].strip().split()
        for s in t:
            tagname  = s.split("=")[0]
            tagvalue = s.split("=")[1].strip("\"").strip("\'")
            fixed_attrs.append((tagname, tagvalue))

        return fixed_attrs

    def start_object(self, attrs):
        attrs  = self.object_fix(attrs)
        domobj = None

        for k, v in attrs:
            if k == 'classid':
                domobj = ActiveXObject(v, 'id')
                # ActiveX object may be initiallized by classid or classname.
                # If created by 'object' tag, classid will be used. Check out 
                # the class definition in 'ActiveX/ActiveX.py' for more.

        if not domobj:
            if config.verboselevel >= config.VERBOSE_DEBUG:
                print "[DEBUG] in PageParser.py: Ignoring(ignoreObj) start_object attrs: " +attrs
            self.ignoreObj = True
            return

        for k, v in attrs:
            if k == 'id' or k == 'name':
                if self.__dict__['__window'].__dict__['__cx'].execute('typeof ' + v + ' == "undefined"'): 
                    self.__dict__['__window'].__dict__['__cx'].add_global(v, domobj)
                self.__dict__['__window'].__dict__['__fl'][-1].__setattr__(v, domobj)
            domobj.__setattr__(dataetc.attrTrans(k, 'object'), v)

        self.DOM_stack[-1].appendChild(domobj)
        self.DOM_stack.append(domobj)

    def end_object(self):
        if self.ignoreObj:
            self.ignoreObj = False
            return
        
        self.unknown_endtag('object')

    def start_script(self, attrs):
        self.in_Script = True
        for attr in attrs: 
            if attr[0].lower() == 'language' and not attr[1].lower().startswith('javascript'):
                if config.verboselevel >= config.VERBOSE_DEBUG:
                    print "[DEBUG] in PageParser.py: Ignoring(ignoreScript) start_object attrs: " +attrs
                self.ignoreScript = True
                return

        self.literal = 1
        self.unknown_starttag('script', attrs)

    def __patch_script(self, exc):
        lineno = 0

        for line in exc.split('\n'):
            if re.search(r'TypeError', line):
                found = False
                for e in line.split():
                    if found:
                        lineno = e.split(',')[0]
                        found = False
                    if e.strip() == 'line':
                        found = True

        new_script = []
        index = 1
        for split_line in self.script.splitlines():
            if index > lineno:
                new_script.append(split_line)
                continue

            if re.search(r'eval', split_line):
                if re.search(r'window.eval = eval;', split_line):
                    new_script.append(split_line)
                else:
                    try:
                        new_line = re.sub(r'eval\(\w+\);', os.environ['PHONEYC_LASTSCRIPT'], split_line)
                        new_line = re.sub(r'eval\(\w+\)', os.environ['PHONEYC_LASTSCRIPT'], split_line)
                        new_script.append(str(new_line))
                    except KeyError:
                        pass
            else:
                new_script.append(split_line)

        self.script = ''
        self.script = '\n'.join(new_script)
        return lineno

    def __last_try(self, exc):
        if not re.search(r'eval\(\w+\);', self.script):
            raise

        if self.__patch_script(exc):
            try:
                self.__dict__['__window'].__dict__['__cx'].execute(self.script)
            except Exception, e:
                exc = traceback.format_exc()
                self.__last_try(exc)

    def end_script(self):
        if self.ignoreScript:
            self.ignoreScript = False
            return

        if self.endearly: 
            return

        self.in_Script = False
        self.literal = 0
        if 'src' in self.DOM_stack[-1].__dict__:
            src = self.__dict__['__window'].document.location.fix_url(self.DOM_stack[-1].src)
            hc = HttpHoneyClient()
            script, headers = hc.get(src)
            self.script += script
       
        self.__dict__['__window'].__dict__['__sl'].append(self.DOM_stack[-1])

        # TODO: fix the encoding error when running phoneyc on 
        # http://phoneyc.googlecode.com/svn/phoneyc/branches/phoneyc-honeyjs/test/qvodsrc.html
        try:
            self.__dict__['__window'].__dict__['__cx'].execute(self.script) # execute script here
        except Exception, e:
            try:
                self.__last_try(traceback.format_exc())
            except Exception, e:
                print 'Error executing:\n' + self.script
                traceback.print_exc()

                if isinstance(self.__dict__['__window'].__dict__['__sl'][-1].src, str): 
                    print self.__dict__['__window'].__dict__['__sl'][-1].src
    
        try: 
            self.__dict__['__window'].__dict__['__cx'].execute('')
        except: 
            pass
        
        # there is a bug in py-sm, that exception cannot be handled correctly and will be
        # passed on to next 'cx.execute'. add an empty execute to balance out the effection.
        if self.__dict__['__window'].__dict__['__sl'] == []:
            self.endearly = True
            self.close()
            return

        scr = self.__dict__['__window'].__dict__['__sl'].pop()
        if scr.parser != None: 
            scr.parser.close()
        self.script = ''
        self.unknown_endtag('script')

    def start_iframe(self, attrs):
        self.unknown_starttag('iframe', attrs)
        src = self.DOM_stack[-1].src

        if isinstance(src, str) or isinstance(src, unicode):
            from Window import Window
            window = Window(self.__dict__['__window'].__dict__['__root'],
                            self.__dict__['__window'].document.location.fix_url(src))
            parser = PageParser(window, window.document, window.__dict__['__html'])
            parser.close()

    def end_iframe(self):
        self.unknown_endtag('iframe')

    def unknown_starttag(self, tag, attrs):
        if config.verboselevel >= config.VERBOSE_DEBUG:
            print "[DEBUG] in PageParser.py Parsing... Got Tag "+tag
        if self.endearly: 
            return
       
        domobj = DOMObject(self.__dict__['__window'], tag, self)
        #sometimes k in tag is not really attrname, so a transform is needed.
        #note that this is IE way. In firefox transform is done in DOMObject.setAttribute()
        for k, v in attrs:
            domobj.setAttribute(dataetc.attrTrans(k, tag), v)

        self.DOM_stack[-1].appendChild(domobj)
        self.DOM_stack.append(domobj)

        try:
            begin = self.html.lower()[self.current:].index('<' + tag)
            self.current += begin + self.html.lower()[self.current + begin:].index('>') + 1
            domobj.begin = self.current
        except: 
            pass

        if tag == 'form': 
            self.__dict__['__window'].__dict__['__fl'].append(domobj)
        if tag == 'br' or tag == 'meta': 
            self.unknown_endtag(tag) # <br> and <meta> have no end tag.
        if tag == 'select': 
            self.lastselect = domobj
        if tag == 'option':
            try: 
                self.lastselect.options.append(domobj)
            except: 
                pass

    def unknown_endtag(self, tag):
        if self.endearly: 
            return

        tempstack = self.DOM_stack[:]
        s = None
        while len(self.DOM_stack) > 1:
            s = self.DOM_stack.pop()
            if s.tagName == tag: 
                break # maybe there's some tag without end_tag. So pop until we find the match tag
        if s is None or s.tagName != tag:
            self.DOM_stack = tempstack
            return
        try: 
            s.onload()
        except: 
            pass

        try: 
            s.end = self.current + self.html.lower()[self.current:].index('</'+tag)
        except: 
            pass

        if tag == 'form':
            self.__dict__['__window'].__dict__['__fl'].pop()

    def unknown_startendtag(self, tag, attrs):
        unknown_starttag(self, tag, attrs)
        unknown_endtag(self, tag)

    def start_embed(self, attrs):
        for attr in attrs:
            if attr[0] == 'src':
                src = attr[1]
                hc  = HttpHoneyClient()
                script, headers = hc.get(src)

    def end_embed(self):
        return

    def characters(self, content):
        self.text = self.text + content

    def handle_data(self, text):
        if self.in_Script:
            self.script += text

