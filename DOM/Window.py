
import sys, os
import traceback
import urlparse
import re

import config
from honeyjs import Runtime
from Document import Document
from Navigator import Navigator
from ActiveX.ActiveX import *
from unknown import unknown
from DOMObject import DOMObject
from ClassFactory import DOMObjectFactory
from HTTP.HttpHoneyClient import hc
import dataetc

class Window(object):
    def __init__(self, root, url, referrer = False):
        self.__dict__['__root']   = root
        self.__dict__['__html']    = ''
        self.__dict__['__headers'] = []
        self.__dict__['__timeout'] = []
        self.__dict__['__referrer'] = referrer
        self.__init_url(url)
        self.__init_runtime()
        self.__init_html()
        self.__init_context()
        root.windows.append(self)

    def __init_url(self, url):
        scheme, netloc, path, query, fragment = urlparse.urlsplit(url)
        if scheme:
            self.__dict__['__scheme'] = str(scheme)
            self.__dict__['__url']    = str(url)
        else:
            self.__init_url(str("http://" + url))

    def __init_runtime(self):
        self.__dict__['__rt'] = Runtime()
        # Context.switch_tracing will toggle the tracing 
        # functionality in honeyjs
        self.__dict__['__rt'].switch_tracing(1)

    def __init_context(self):
        if config.verboselevel >= config.VERBOSE_DEBUG:
            print '[DEBUG] in Window.py: New Document created by Window, url='+self.__dict__['__url']
        
        document = Document(self, self.__dict__['__url'], self.__dict__['__headers'])

        context = self.__dict__['__rt'].new_context(alertlist = [])
        
        context.add_global('window'       , self)
        context.add_global('self'         , self)
        context.add_global('document'     , document)
        context.add_global('location'     , document.location)
        context.add_global("alert"        , self.alert)
        context.add_global("setTimeout"   , self.setTimeout)
        context.add_global("setInterval"  , self.setInterval)
        context.add_global("SetInterval"  , self.setInterval)
        context.add_global("ActiveXObject", ActiveXObject)
        context.add_global("navigator"    , Navigator())
        context.add_global("screen"       , unknown())
        context.add_global("eval"         , self.eval)
        
        context.execute("Event = function(){}")
        context.execute("function CollectGarbage() {};")
        context.execute("function quit() {};")
        context.execute("function prompt() {};")

        for clsname in dataetc.classlist:
            inits = {'window' : self, 
                     'tagName': dataetc.classtotag(clsname),
                     'parser' : None}
            context.add_global(clsname, DOMObjectFactory(clsname, inits))

        self.__dict__['__cx'] = context
        self.__dict__['__sl'] = []
        self.__dict__['__fl'] = [document]
        context.execute("window.eval = eval;")

    def __init_html(self):
        scheme = self.__dict__['__scheme']
        url    = self.__dict__['__url']
        
        try:
            self.__dict__['__html'], headers = hc.get(url, self.__dict__['__referrer'])
            if config.replace_nonascii:
                self.__dict__['__html'] = re.sub('[\x80-\xff]',' ',self.__dict__['__html'])
            for header in headers.splitlines():
                self.__dict__['__headers'].append(header)
        except Exception, e:  
            traceback.print_exc()

    def __setattr__(self, name, val):
        if not name.startswith('__'):
            self.__dict__['__cx'].add_global(name, val)

        self.__dict__[name] = val

    def __getattr__(self, name):
        if name.startswith('__'): 
            return object.__getattr__(self, name)
        
        if self.__dict__['__cx'].execute('typeof ' + name + ' == "undefined"'): 
            return None
        else: 
            return self.__dict__['__cx'].execute(name)

    def attachEvent(self, sEvent, fpNotify):
        if dataetc.isevent(sEvent, 'window'):
            self.__dict__[sEvent] = fpNotify
        # print "********************* [WARNING] *************************"
        # print "No emulation available for window.attachEvent"
        # print "Event   : " + sEvent
        # print "Handler : " + str(fpNotify)
        # print "*********************************************************"

    def setTimeout(self, f, delay):
        self.__dict__['__timeout'].append(f)

    def setInterval(self, f, delay):
        self.setTimeout(f, delay)

    def eval(self, script):
        script=str(script)
        try:
            ret = self.__dict__['__cx'].execute(script)
            return ret
        except:
            try:
                envbase = os.environ['PHONEYC_LASTSCRIPT']
                if script:
                    os.environ['PHONEYC_LASTSCRIPT'] = script
            except KeyError:
                os.environ['PHONEYC_LASTSCRIPT'] = script

    def alert(self, s):
        if config.verboselevel >= config.VERBOSE_ALERT:
            print '[ALERT] ' + str(s)

