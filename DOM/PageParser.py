import sys, os, re, cgi
import traceback, exceptions
from sgmllib import SGMLParser, SGMLParseError

import config
import dataetc
from honeyjs import Runtime
from ActiveX.ActiveX import *  
from DOMObject import DOMObject 
from HTTP.HttpHoneyClient import hc

class PageParser(SGMLParser):
    def __init__(self, window, document, html):
        SGMLParser.__init__(self)
        self.DOM_stack  = [document] # doc is usually document, but if the parser is called by document.write, doc is the script object
        self.current    = 0
        self.text       = ''
        self.script     = ''
        self.in_Script  = False
        self.endearly   = False # for some cases, such as location is changed, the parser will stop early.
        self.ignoreObj  = False
        self.ignoreScript = False
        self.__dict__['__window'] = window
        self.__dict__['__window'].__dict__['__parser'] = self

        try:
            self.html_fix(html)
            self.feed(self.html)
        except:
            traceback.print_exc()

    def emulate_timeout(self, name, value):
        method_name = "_Window__window_%s_setTimeout" % (config.browserTag, )
        method = getattr(self.__dict__['__window'], method_name)
        lvalue = value.lower()
        if lvalue.startswith('javascript:'):
            value = value[11:].strip()
        if value.startswith('return'):
            value = value[6:].strip()

        method(value, 0)

    def start_a(self, attrs):
        self.start_input(attrs)

    def end_a(self):
        pass

    def start_input(self, attrs):
        for name, value in attrs:
            if name.lower() == 'onclick':
                self.emulate_timeout(name, value)

    def end_input(self):
        pass

    def start_body(self, attrs):
        for name, value in attrs:
            if name.lower() == 'onload':
                self.emulate_timeout(name, value)

    def end_body(self):
        pass

    def html_fix(self, html):
        self.html = ''
        for line in html.split('\n'):
            if re.search(r'<\w', line) and not re.search(r'>', line):
                if not re.search(r'<!\w', line):
                    self.html += re.sub('<', "< ", line)
                    self.html += '\n'
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
                try:
                    domobj = ActiveXObject(v, 'id')
                except UserWarning:
                    pass
                # ActiveX object may be initiallized by classid or classname.
                # If created by 'object' tag, classid will be used. Check out 
                # the class definition in 'ActiveX/ActiveX.py' for more.

        if not domobj:
            config.VERBOSE(config.VERBOSE_DEBUG, "[DEBUG] PageParser.py: Ignoring start_object attrs: " +str(attrs))
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

    def start_script(self, attrs):
        for k, v in attrs: 
            if k.lower() == 'language' and not v.lower().startswith('javascript'):
                config.VERBOSE(config.VERBOSE_DEBUG, "[DEBUG] in PageParser.py: Ignoring(ignoreScript) start_object attrs: " +str(attrs))
                self.ignoreScript = True
                return

        self.unknown_starttag('script', attrs)
        self.in_Script = True
        self.literal = 1

        if 'src' in self.DOM_stack[-1].__dict__:
            src = self.__dict__['__window'].document.location.fix_url(self.DOM_stack[-1].src)
            script, headers = hc.get(src, self.__dict__['__window'].document.location.href)            
            if config.replace_nonascii:
                script = re.sub('[\x80-\xff]', ' ', script)
            self.DOM_stack[-1].__dict__['script'] += script
            #self.literal = 0
            self.__dict__['__window'].__dict__['__sl'].append(self.DOM_stack[-1])
            self.end_script()
            return
       
        self.__dict__['__window'].__dict__['__sl'].append(self.DOM_stack[-1])

    def end_script(self):
        self.in_Script = False
        self.literal   = 0

        if self.ignoreScript:
            self.ignoreScript = False
            return

        if self.endearly: 
            return
        
        if self.__dict__['__window'].__dict__['__sl'] == []:
            self.endearly = True

    def start_iframe(self, attrs):
        self.unknown_starttag('iframe', attrs)
        src = self.DOM_stack[-1].src

        from Window import Window
        window = Window(self.__dict__['__window'].__dict__['__root'],
                        self.__dict__['__window'].document.location.fix_url(src),
                        self.__dict__['__window'])
        parser = PageParser(window, window.document, window.__dict__['__html'])
        parser.close()

    def end_iframe(self):
        self.unknown_endtag('iframe')

    def start_frame(self, attrs):
        self.unknown_starttag('frame', attrs)
        if 'src' in self.DOM_stack[-1].__dict__:
            src = self.__dict__['__window'].document.location.fix_url(self.DOM_stack[-1].src)
            frame, headers = hc.get(src, self.__dict__['__window'].document.location.href)
            self.DOM_stack[-1].__dict__['frame'] = frame

    def end_frame(self):
        self.unknown_endtag('frame')

    def unknown_starttag(self, tag, attrs):
        if self.in_Script:
            self.handle_data(self.get_starttag_text())
            return

        config.VERBOSE(config.VERBOSE_DEBUG, "[DEBUG] [PageParser.py] Tag: " + tag)
        if self.endearly: 
            return
       
        domobj = DOMObject(self.__dict__['__window'], tag, self)
        #sometimes k in tag is not really attrname, so a transform is needed.
        #note that this is IE way. In firefox transform is done in DOMObject.setAttribute()
        for k, v in attrs:
            domobj.setAttribute(dataetc.attrTrans(k, tag), v)

        if tag == 'script':
            domobj.__dict__['script'] = ''

        if config.retrieval_all:
            if 'src' in domobj.__dict__:
                src = self.__dict__['__window'].document.location.fix_url(domobj.src)
                script, headers = hc.get(src, self.__dict__['__window'].document.location.href)
                # if config.replace_nonascii:
                #     script = re.sub('[\x80-\xff]',' ',script)

        try:
            begin  = self.html.lower()[self.current:].index('<' + tag)
            start  = self.current + begin
            offset = begin + self.html.lower()[start:].index('>') + 1

            self.current += offset
            domobj.__dict__['begin'] = self.current
            domobj.__dict__['end']   = self.current + self.html.lower()[self.current:].index('</'+tag) 

            if (tag == 'div' and attrs) or tag == 'body':
                domobj.innerHTML = self.html[domobj.__dict__['begin']:domobj.__dict__['end']]
        except:
            pass

        self.DOM_stack[-1].appendChild(domobj)
        self.DOM_stack.append(domobj)

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
        if self.in_Script:
            self.handle_data('</%s>' % (tag,))
            return

        if self.endearly: 
            return

    def unknown_startendtag(self, tag, attrs):
        unknown_starttag(self, tag, attrs)
        unknown_endtag(self, tag)

    def start_embed(self, attrs):
        self.unknown_starttag('embed', attrs)
        if 'src' in self.DOM_stack[-1].__dict__:
            src = self.__dict__['__window'].document.location.fix_url(self.DOM_stack[-1].src)
            embed, headers = hc.get(src, self.__dict__['__window'].document.location.href)
            self.DOM_stack[-1].__dict__['embed'] = embed

    def end_embed(self):
        if self.in_Script:
            return

        self.unknown_endtag('embed')

    def characters(self, content):
        self.text = self.text + content

    def parse_declaration(self, i):
        if self.rawdata[i:i + 9] == '<![CDATA[':
            k = self.rawdata.find(']]>', i)
            if k == -1: 
                k = len(self.rawdata)
            self.handle_data(self.rawdata[i + 9:k])
            return k + 3
        return SGMLParser.parse_declaration(self, i)

    def handle_data(self, text):
        if self.in_Script:
            if 'script' not in self.DOM_stack[-1].__dict__:
                self.DOM_stack[-1].__dict__['script'] = ''
            self.DOM_stack[-1].__dict__['script'] += text

