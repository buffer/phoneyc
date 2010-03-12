
import sys, os
from honeyjs import Runtime
from HTTP.HttpHoneyClient import HttpHoneyClient
from Document import Document
from Navigator import Navigator
from ActiveX.ActiveX import *
from unknown import unknown
from DOMObject import DOMObject
import traceback, urlparse
import dataetc

def alert(x):
    print x

class Window(object):
    def __init__(self, root, url):
        self.__init_runtime()
        self.__init_html(url)
        self.__init_context(url)
        self.__dict__['__root'] = root
        self.__dict__['__timeout'] = []
        root.windows.append(self)

    def __init_runtime(self):
        self.__dict__['__rt'] = Runtime()
        # Context.switch_tracing will toggle the tracing 
        # functionality in honeyjs
        self.__dict__['__rt'].switch_tracing(1)

    def __init_context(self, url):
        if not url.startswith("http"):
            url = "http://" + url

        document = Document(self, url, self.__dict__['__headers'])

        context = self.__dict__['__rt'].new_context(alertlist = [])
        
        context.add_global('window'       , self)
        context.add_global('document'     , document)
        context.add_global('location'     , document.location)
        context.add_global("alert"        , alert)
        context.add_global("setTimeout"   , self.setTimeout)
        context.add_global("setInterval"  , self.setInterval)
        context.add_global("SetInterval"  , self.setInterval)
        context.add_global("ActiveXObject", ActiveXObject)
        context.add_global("navigator"    , Navigator())
        context.add_global("screen"       , unknown())
        context.add_global("eval"         , self.eval)
        
        context.execute("Event = function(){}")

        for clsname in dataetc.classlist:
            exec 'class ' + clsname + '(DOMObject):\n\t'\
                    + '\t' + 'def __init__(self, window, clsname, parser = None):\n\t'\
                    + '\t\t' + 'self.tagName = "' + dataetc.classtotag(clsname) + '"' 
            exec 'context.add_global("' + clsname + '",' + clsname + ')'

        self.__dict__['__cx'] = context
        self.__dict__['__sl'] = []
        self.__dict__['__fl'] = [document]

    def __init_html(self, url):
        hc = HttpHoneyClient()
        scheme, netloc, path, query, fragment = urlparse.urlsplit(url)
        self.__dict__['__html'] = ''
        self.__dict__['__headers'] = []
        
        try:
            if scheme.lower() in ('file', ):
                filename = url[7:]
                if filename in ["about:blank", ]:
                    return

                f = file(filename ,'r')
                self.__dict__['__html'] = f.read()
            else:
                self.__dict__['__html'], headers = hc.get(str(url))
                for header in headers.split("\r\n"):
                    self.__dict__['__headers'].append(header)
        except Exception, e:  
            traceback.print_exc()
            print e

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
        print "********************* [WARNING] *************************"
        print "No emulation available for window.attachEvent"
        print "Event   : " + sEvent
        print "Handler : " + str(fpNotify)
        print "*********************************************************"

    def setTimeout(self, f, delay):
        self.__dict__['__timeout'].append(f)

    def setInterval(self, f, delay):
        self.setTimeout(f, delay)

    def eval(self, script):
        try:
            self.__dict__['__cx'].execute(script)
        except:
            try:
                envbase = os.environ['PHONEYC_LASTSCRIPT']
                if script:
                    os.environ['PHONEYC_LASTSCRIPT'] = script
            except KeyError:
                os.environ['PHONEYC_LASTSCRIPT'] = script


