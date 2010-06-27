import sys 
import traceback
import urlparse

import dataetc
from Array import Array
from CSSStyleDeclaration import CSSStyleDeclaration
from unknown import unknown
import config
import time
from HTTP.HttpHoneyClient import hc
import re

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

        # assign an initial id to every dom node
        varname = 'domnode' + str(int(time.time()*10000000))
        self.__setattr__('id', varname)

    def handle_src(self, name, val):
        url = self.__dict__['__window'].document.location.fix_url(val)

        if config.retrieval_all:
            hc.get(url, self.__dict__['__window'].document.location.href)
        
        scheme, netloc, path, query, fragment = urlparse.urlsplit(url)
        if scheme not in ('http','file','https','ftp'):
            config.VERBOSE(config.VERBOSE_WARNING, "[WARNING] Got unknown scheme: %s in %s.%s ."%(url,self.tagName, name));
            if 'onerror' in self.__dict__:
                config.VERBOSE(config.VERBOSE_DEBUG, "[DEBUG] Calling onerror of %s."%(self.tagName));
                self.onerror()

        if self.tagName == "iframe":
            from Window import Window
            from PageParser import PageParser
            window = Window(self.__dict__['__window'].__dict__['__root'],
                            self.__dict__['__window'].document.location.fix_url(val),
                            self.__dict__['__window'].document.location.href)
            parser = PageParser(window, window.document, window.__dict__['__html'])
            parser.close()

    def handle_id(self, name, val):
        self.__dict__[name] = val
        val = val.replace(':','_').replace('-','_')
        try:
            if self.__dict__['__window'].__dict__['__cx'].execute('typeof ' + val + ' == "undefined"'):
                self.__dict__['__window'].__dict__['__cx'].add_global(val, self)
        except:
            pass
                
        self.__dict__['__window'].__dict__['__fl'][-1].__setattr__(val, self)

    def handle_name(self, name, val):
        self.handle_id(name, val)

    def handle_innerHTML(self, name, val):
        val = str(val)
        if self.__parser:
            self.__parser.html = self.__parser.html[:self.begin] + val + self.__parser.html[self.end:]
            dev = self.end - self.begin - len(val)
            for i in self.__dict__['__window'].document.all:
                if i.begin:
                    if i.begin > self.end:
                        i.begin -= dev
                if i.end:
                    if i.end >= self.end:
                        i.end -= dev
            
            self.__parser.current -= dev
            return
        
        from PageParser import PageParser
        self.__parser = PageParser(self.__dict__['__window'], self.__dict__['__window'].document, val)

    def __setattr__(self, name, val):
        handler = getattr(self, "handle_%s" % (name, ))
        try:
            handler(name, val)
        except:
            pass
        
        #if it's an event, let it be a function
        if dataetc.isevent(name, self.tagName):
            # using 'this' in methods may cause additional problems.
            # i think i find a way to handle this, but there could 
            # be some cases it cannot cover.
            val = str(val)+';'
            cx = self.__dict__['__window'].__dict__['__cx'];
            val = cx.patch_script(val);
            try:
                if 'id' in self.__dict__:
                    vals = re.split('(?<=[^a-zA-Z0-9_])this(?=[^a-zA-Z0-9_])', val)
                    valstmp = re.split('^this(?=[^a-zA-Z0-9_])', vals[0])
                    if len(vals) > 1:
                        vals = valstmp+vals[1:]
                    valstmp = re.split('(?<=[^a-zA-Z0-9_])this$', vals[-1])
                    if len(vals) > 1:
                        vals = vals[:-1]+valstmp
                    val = self.id.join(vals)
                self.__dict__[name] = cx.execute('function(){' + val + '}')
            except:
                traceback.print_exc()
        
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


