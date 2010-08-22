
import sys, os, re
import hashlib
from binascii import hexlify
import traceback, exceptions

basedir = os.path.dirname(os.getcwd())
sys.path.append(basedir)

from ActiveX.ActiveX import *
from Window import Window
from PageParser import PageParser

class DOM:
    """
        Class DOM

        This class represents the root of our "analysis hierarchy". While
        browsing a URL you can face many different situations where windows
        and other related objects nest themselves thus this class is meant 
        to be used to build a Window objects hierarchy.
        
        Attributes:  
            `windows'    : a list of all the Window objects created during the 
                          analysis
            `top_window' : used for marking the first created Window object as
                          special. This attribute is meant to greatly simplify 
                          DOM emulation.
        """
    def __init__(self, url):
        self.windows = []
        self.url     = url
        os.environ['PHONEYC_MOCK_ACTIVEX'] = '0'

    def do_execute(self, window, parser, element):
        f = 'function(){' + element + '}'

        if not self.__do_execute(window, parser, f):
            return

        result = self.__do_execute(window, parser, f.decode('string-escape'))
        if result:
            print f
            print result

    def __do_execute(self, window, parser, f):
        try:
            window.__dict__['__cx'].execute(f)
        except:
            try:
                window.__dict__['__cx'].execute(parser.script + f)
            except:
                return str(traceback.format_exc())

        return None

    def patch_script(self, window, script, exc):
        lineno = 0
        _script = []

        for line in exc.split('\n'):
            if re.search(r'TypeError', line):
                found = False
                for e in line.split():
                    if found:
                        lineno = e.split(',')[0]
                        found = False
                    if e.strip() == 'line':
                        found = True

        index = 1
        for split_line in script.splitlines():
            if index > lineno:
                _script.append(split_line)
                continue

            if re.search(r'eval', split_line):
                if re.search(r'window.eval = eval;', split_line):
                    _script.append(split_line)
                else:
                    try:
                        new_line = re.sub(r'eval\(\w+\);', window.__dict__['__lastscript'], split_line)
                        new_line = re.sub(r'eval\(\w+\)' , window.__dict__['__lastscript'], split_line)
                        _script.append(str(new_line))
                    except KeyError:
                        pass
            else:
                _script.append(split_line)

        if lineno:
            return '\n'.join(_script)
        
        return None

    def last_try_script(self, window, script, exc):
        if not re.search(r'eval\(\w+\);', script):
            raise

        _script = self.patch_script(window, script, exc)
        if _script:
            try:
                window.__dict__['__cx'].execute(window.__dict__['__cx'].patch_script(_script))
            except Exception, e:
                exc = traceback.format_exc()
                self.last_try_script(window, _script, exc)

    def disable_mock_activex(self):
        os.environ['PHONEYC_MOCK_ACTIVEX'] = '0'

    def enable_mock_activex(self):
        os.environ['PHONEYC_MOCK_ACTIVEX'] = '1'

    def is_enabled_mock_activex(self):
        return int(os.environ['PHONEYC_MOCK_ACTIVEX'])

    def check_mock_activex(self, e):
        return e.__class__ == exceptions.UserWarning and not self.is_enabled_mock_activex()

    def exec_script(self, window, script):
        mock_active = False

        # Let's explain what's going on here since it's
        # not so straightforward...
        try:
            # First attempt to execute the script code
            config.VERBOSE(config.VERBOSE_DEBUG,'[DEBUG] Executing script')
            config.VERBOSE(config.VERBOSE_DEBUG, script)
            window.__dict__['__cx'].execute(script)
        except Exception, e:
            #for index, line in enumerate(script.split('\n')):
            #    print index, line
            # Something went wrong! Let's take a look at the possible cause
            # of such error
            if config.universal_activex and self.check_mock_activex(e):
                # Being here means we raised a UserWarning exception (take a
                # look at ActiveX/ActiveX.py for additional deatils). This
                # means we were unable to instantiate an ActiveX object because
                # there's not an emulation script for it or because it doesn't
                # exist at all. The latter case could be used to defeat our
                # universal ActiveX object which is disabled during the first
                # attempt in order to emulate what should be the behaviour of a
                # real browser. In order to have a better understanding of what's
                # going on we enable the universal ActiveX object and move on.
                self.enable_mock_activex()
                mock_active = True
            try:
                # An error occurred during the execution. We analyze the raised
                # exception in order to determine if it's a TypeError instance.
                # In such case we try to identify the error location within the
                # script, patching it and executing it again.
                self.last_try_script(window, script, traceback.format_exc())
            except Exception, e:
                # No luck!
                config.VERBOSE(config.VERBOSE_DEBUG, traceback.print_exc())
                try:
                    if isinstance(self.__dict__['__window'].__dict__['__sl'][-1].src, str):
                        print self.__dict__['__window'].__dict__['__sl'][-1].src
                except Exception, e:
                    pass

        # The universal ActiveX object was enabled so give this script a last
        # try with this feature on. This path is useful for identifying missing
        # ActiveX objects which need to be emulated.
        if mock_active:
            self.exec_script(window, script)

    def get_script(self, window, parser):
        return '\n'.join([s.__dict__['script'] for s in parser.DOM_stack if 'script' in s.__dict__])

    def exec_js(self, window, parser):
        self.disable_window_warning(window)
        self.event_handler(window, parser, 'onload', window.onload)
        self.enable_window_warning(window)
        script = self.get_script(window, parser)
        self.exec_script(window, script)

    def get_event_func(self, name, f):
        begin = str(f).index('{') + 1
        s = str(f)[begin:].split('}')
        script = '}'.join(s[:-1]) + s[-1]
        return script

    def event_handler(self, window, parser, name, f):
        if name in window.__dict__:
            try:
                script = self.get_event_func(name, f)
                window.__dict__['__cx'].execute(script)
            except:
                print str(f)
                #traceback.print_exc()
                pass

    def disable_window_warning(self, window):
        window.__dict__['__warning'] = False

    def enable_window_warning(self, window):
        window.__dict__['__warning'] = True

    def handle_events(self, window, parser):
        self.disable_window_warning(window)
        self.event_handler(window, parser, 'onabort'         , window.onabort)
        self.event_handler(window, parser, 'onbeforeunload'  , window.onbeforeunload)
        self.event_handler(window, parser, 'onblur'          , window.onblur)
        self.event_handler(window, parser, 'onchange'        , window.onchange)
        self.event_handler(window, parser, 'onclick'         , window.onclick)
        self.event_handler(window, parser, 'onclose'         , window.onclose)
        self.event_handler(window, parser, 'oncontextmenu'   , window.oncontextmenu)
        self.event_handler(window, parser, 'ondragdrop'      , window.ondragdrop)
        self.event_handler(window, parser, 'onerror'         , window.onerror)
        self.event_handler(window, parser, 'onfocus'         , window.onfocus)
        self.event_handler(window, parser, 'onhashchange'    , window.hashchange)
        self.event_handler(window, parser, 'onkeydown'       , window.onkeydown)
        self.event_handler(window, parser, 'onkeypress'      , window.onkeypress)
        self.event_handler(window, parser, 'onkeyup'         , window.onkeyup)
        self.event_handler(window, parser, 'onload'          , window.onload)
        self.event_handler(window, parser, 'onmousedown'     , window.onmousedown)
        self.event_handler(window, parser, 'onmousemove'     , window.onmousemove)
        self.event_handler(window, parser, 'onmouseout'      , window.onmouseout)
        self.event_handler(window, parser, 'onmouseover'     , window.onmouseover)
        self.event_handler(window, parser, 'onmouseup'       , window.onmouseup)
        self.event_handler(window, parser, 'onmozorientation', window.onmozorientation)
        self.event_handler(window, parser, 'onpaint'         , window.onpaint)
        self.event_handler(window, parser, 'onpopstate'      , window.onpopstate)
        self.event_handler(window, parser, 'onreset'         , window.onreset)
        self.event_handler(window, parser, 'onresize'        , window.onresize)
        self.event_handler(window, parser, 'onscroll'        , window.onscroll)
        self.event_handler(window, parser, 'onselect'        , window.onselect)
        self.event_handler(window, parser, 'onsubmit'        , window.onsubmit)
        self.event_handler(window, parser, 'onunload'        , window.onunload)
        self.event_handler(window, parser, 'onpageshow'      , window.onpageshow)
        self.event_handler(window, parser, 'onpagehide'      , window.onpagehide)
        self.enable_window_warning(window)

    def parse(self):
        self.top_window = Window(self, self.url, False)
        parser = PageParser(self.top_window, self.top_window.document, self.top_window.__dict__['__html'])

        for window in self.windows:
            parser = window.__dict__['__parser']
        
            #self.handle_events(window, parser)
            self.exec_js(window, parser)

            for i in window.__dict__['__timeout']:
                try:
                    script = str(i)
                    self.exec_script(window, script)
                except:
                    traceback.print_exc()
                    pass
                    
    def traverse(self, dom, k):
        for i in dom.children:
            for j in range(k): 
                print '-',
            print i.tagName
            if i.tagName != 'object': 
                self.traverse(i, k + 1)

    def analyze(self):
        self.parse()
        alertlist = []

        for window in self.windows:
            #self.traverse(window.document, 0)
            write_log(hashlib.md5(window.document.location.href).hexdigest())

            alist = window.__dict__['__cx'].get_alertlist()
            if alist:
                alertlist.extend(alist)
        
	    return alertlist
