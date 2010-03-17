import sys 
import traceback
import dataetc
from Array import Array
from CSSStyleDeclaration import CSSStyleDeclaration
from unknown import unknown

class DOMObject(object):
    def __init__(self, window, tag, parser):
        self.tagName  = tag
        self.__parser = parser
        self.__dict__['__window'] = window 

        if tag == 'body': 
            self.__dict__['__window'].document.body = self
        if tag == 'select': 
            self.options = Array()
        if tag == 'input': 
            self.value = ''
        if tag == 'option': 
            self.value = 0

        self.children   = []
        self.childNodes = Array()
        self.style      = CSSStyleDeclaration()
        self.__dict__['__window'].document.all.append(self)

    def __setattr__(self, name, val):
        if name == 'id' or name == 'name':
            self.__dict__[name] = val
            val = val.replace(':','_').replace('-','_')
            try:
                if self.__dict__['__window'].__dict__['__cx'].execute('typeof ' + val + ' == "undefined"'): 
                    self.__dict__['__window'].__dict__['__cx'].add_global(val, self)
            except: 
                pass

            self.__dict__['__window'].__dict__['__fl'][-1].__setattr__(val, self)
            return

        #src can be detect here, not implemented yet
        #if name == 'src':
        #   pass

        if self.tagName == "iframe" and name == 'src':
            #hc = HttpHoneyClient()
            #url = self.__dict__['__window'].document.location.fix_url(str(val))
            #content, headers = hc.get(url)
            from Window import Window
            from PageParser import PageParser
            #TODO: Add referrer
            window = Window(self.__dict__['__window'].__dict__['__root'],
                            self.__dict__['__window'].document.location.fix_url(val))
            parser = PageParser(window, window.document, window.__dict__['__html'])
            #PageParser(self.__dict__['__window'],
            #           self.__dict__['__window'].__dict__['__sl'][-1],
            #           content)
            parser.close()
            return
            
        #if it's an event, let it be a function
        if dataetc.isevent(name, self.tagName):
            # using 'this' in methods may cause additional problems.
            # i think i find a way to handle this, but there could 
            # be some cases it cannot cover.
            val = str(val)+';'
            try:
                if 'id' in self.__dict__:
                    self.__dict__['__window'].__dict__['__cx'].execute(self.id + '.' + name + '=function(){' + val + '}')
                else: 
                    self.__dict__[name] = cx.execute('function(){' + val + '}')
            except: 
                pass
            return

        if name == 'innerHTML':
            try:
                self.__parser.html = self.__parser.html[:self.begin] + val + self.__parser.html[self.end:]
                dev = self.end - self.begin - 1 - len(val)
                for i in self.__dict__['__window'].document.all:
                    if i.begin:
                        if i.begin > self.end: 
                            i.begin -= dev
                    if i.end:
                        if i.end > self.end: 
                            i.end -= dev
                self.__parser.current -= dev
            except Exception, e: 
                traceback.print_exc()

            from PageParser import PageParser
            self.parser = PageParser(self.__dict__['__window'], self, val)
            return

        self.__dict__[name] = val

    def focus(self):
        if 'onfocus' in self.__dict__: 
            self.onfocus()
        self.__dict__['__window'].document.activeElement = self

    def blur(self):
        if 'onblur' in self.__dict__: 
            self.onblur()

    def __getattr__(self, name):
        if name == 'innerHTML': 
            return self.__parser.html[self.begin:self.end]
        return unknown()

    def appendChild(self, dom):
        if self.childNodes.length == 0: 
            self.firstChild = dom
        self.childNodes.append(dom)
        self.lastChild = dom
        dom.__dict__['parentNode'] = self
        self.children.append(dom)

    def removeChild(self, dom):
        self.childNodes.remove(dom)
        if self.childNodes.length == 0:
            self.firstChild = None
            self.lastChild  = None
        else:
            self.firstChild = self.childNodes[0]
            self.lastChild  = self.childNodes[self.childNodes.length - 1]

    def setAttribute(self, attname, attval):
        self.__setattr__(attname, attval)

    def removeAttribute(self, attname):
        if self.__dict__[attname]: 
            del self.__dict__[attname]


