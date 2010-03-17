
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
        self.url = url

    def parse(self):
        window = Window(self, self.url)
        parser = PageParser(window, window.document, window.__dict__['__html'])
        parser.close()

        for window in self.windows:
            parser = PageParser(window, window.document, window.__dict__['__html'])
            parser.close()

        for window in self.windows:
            for i in window.__dict__['__timeout']:
                try:
                    window.__dict__['__cx'].execute(i + ";1;")
                    continue
                except:
                    pass

            if 'onload' in window.__dict__:
                window.onload()

            # Added this try clause while analyzing Fragus Exploit Kit
            try:
                window.__dict__['__cx'].execute(i + "\";1;")
                continue
            except:
                pass

            try:
                window.__dict__['__cx'].execute('if(typeof ' + i + '=="function") ' + i +'()')
                continue
            except:
                pass

            #print window.document
            #print window.document.all
            for i in window.document.all:
                if 'onclick' in i.__dict__: 
                    try:
                        i.onclick()
                    except:
                        traceback.print_exc()
                if 'onmouseover' in i.__dict__: 
                    try:
                        i.onmouseover()
                    except:
                        traceback.print_exc()
                if 'onmouseout' in i.__dict__: 
                    try:
                        i.onmouseout()
                    except:
                        traceback.print_exc()


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
