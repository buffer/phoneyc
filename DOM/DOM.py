
import sys, os
import hashlib
from binascii import hexlify
import traceback

basedir = os.path.dirname(os.getcwd())
sys.path.append(basedir)

from ActiveX.ActiveX import *
from Window import Window
from PageParser import PageParser

class DOM:
    def __init__(self, url):
        self.windows = []
        self.url     = url
        os.environ['PHONEYC_MOCK_ACTIVEX'] = '0'

    def do_execute(self, window, parser, element):
        f = element

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

    def parse(self):
        top_window = Window(self, self.url, False)
        parser = PageParser(top_window, top_window.document, top_window.__dict__['__html'])
        parser.close()

        for window in self.windows:
            parser = PageParser(window, window.document, window.__dict__['__html'])
            window.top = top_window

            for i in window.__dict__['__timeout']:
                try:
                    window.__dict__['__cx'].execute(window.__dict__['__cx'].patch_script(i)+ ";1;")
                except:
                    #traceback.print_exc()
                    pass

            # if 'onload' in window.__dict__:
            #     try:
            #         window.__dict__['__cx'].execute(str(window.onload))
            #         #window.onload()
            #     except:
            #         print window.onload
            #         traceback.print_exc()
                    
            for i in window.document.all:
                if 'onclick' in i.__dict__:
                    self.do_execute(window, parser, i.onclick)
                if 'onmouseover' in i.__dict__:
                    self.do_execute(window, parser, i.onmouseover)
                if 'onmouseout' in i.__dict__: 
                    self.do_execute(window, parser, i.onmouseout)
		if 'onload' in i.__dict__:
		    i.onload=i.onload.split(' ')[-1]
                    self.do_execute(window, parser, i.onload)
	        if 'unonload' in i.__dict__:
		    i.unonload=i.unonload.split(' ')[-1]
		    self.do_execute(window, parser, i.unonload)

            # if 'onunload' in window.__dict__:
            #     try:
            #         window.__dict__['__cx'].execute(str(window.onunload))
            #         #window.onunload()
            #     except:
            #         print window.onunload
            #         traceback.print_exc()

            parser.close()
                    
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
