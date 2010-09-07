
import os
import config
from binascii import hexlify
from CLSID import clsidlist, clsnamelist
from Attr2Fun import Attr2Fun

eventlist = []
funname   = []

class unknownObject(object):
    def __init__(self, name, parent = None):
        self.__dict__['__name'] = name
        if not parent:
            self.__dict__['tagName'] = 'object'
        else: 
            self.__dict__['__parent'] = parent

    def __getattr__(self, name):
        funname.append(name)
        add_event(self, 'get', name)
        self.__dict__[name] = unknownObject(name, self)
        return self.__dict__[name]

    def __call__(self, *arg):
        if len(str(arg)) >= 50:
            add_alert('Warning: argument of function ' + funname[-1] + ' length = ' + str(len(str(arg))))
        elif str(arg).lower().find('http://') != -1:
            add_alert('Warning: argument of function ' + funname[-1] + ' contains url: ' + str(arg))
        elif str(arg).lower().find('c:\\') != -1:
            add_alert('Warning: argument of function ' + funname[-1] + ' contains filename: ' +str(arg))
        
        add_event(self, 'call', arg)
        if '__argument' not in self.__dict__: 
            self.__dict__['__argument'] = []
        returnval = unknownObject('__argument', self)
        returnval.__dict__['__argument'] = arg
        return returnval

    def __setattr__(self, name, val):
        add_event(self, 'set', name, val)
        if len(str([val])) >= 50:
            add_alert('Warning: attribute ' + name + ' length = ' + str(len(str([val]))))
        elif str([val]).lower().find('http://') != -1:
            add_alert('Warning: attribute ' + name + ' contains url: ' + str([val]))
        elif str([val]).lower().find('c:\\') != -1:
            add_alert('Warning: attribute ' + name + ' contains file name: ' + str([val]))
        self.__dict__[name] = val
    
    def __noSuchMethod__(self, name, *arg):
        add_event(self, 'call', arg)
        for i in arg:
            if isinstance(i, str) and len(i)>=50:
                add_alert('Warning: argument of function '+name+' length = '+str(len(i)))
        return unknownObject()


class ActiveXObject(unknownObject):
    def __init__(self, cls, clstype = 'name'):
        config.VERBOSE(config.VERBOSE_WARNING, "[WARNING] New ActiveX Object: " + cls)

        unknownObject.__init__(self, cls)
        filename = ''
        if clstype == 'id':
            if len(cls) >= 6 and (cls[0:6] == 'clsid:' or cls[0:6] == 'CLSID:'):
                cls = cls[6:].upper()
            if cls in clsidlist.keys(): 
                filename = clsidlist[cls]
        else:
            if cls in clsnamelist: 
                filename = clsnamelist[cls]

        self.__dict__['__name'] = filename
#       config.VERBOSE(config.VERBOSE_WARNING, config.universal_activex)
        if not config.universal_activex:
            self.check_raise_warning(filename, cls)
        if filename:
            exec load_src(filename)

    def is_enabled_mock_activex(self):
        return int(os.environ['PHONEYC_MOCK_ACTIVEX'])

    def raise_warning(self, cls):
        print "[WARNING] Unknown ActiveX Object: %s" % (cls, )
        raise UserWarning

    def check_raise_warning(self, filename, cls):
        if not filename:
            self.raise_warning(cls)

        module = "ActiveX/modules/%s" % (filename, )
        if not self.is_enabled_mock_activex() and not os.access(module, os.F_OK):
            self.raise_warning(cls)
	
    def __setattr__(self, name, val):
        key = self.__dict__['__name'] + name
        if key in Attr2Fun.keys():
            Attr2Fun[name](val)
        else:
            unknownObject.__setattr__(self, name, val)

def load_src(filename):
    module = "ActiveX/modules/%s" % (filename, )
    script = ''

    try:
        fd = open(module, 'r')
        script = fd.read()
        fd.close()
    except IOError:
        pass
    finally:
        return script

def add_alert(alert):
    config.VERBOSE(config.VERBOSE_ALERT, '[ALERT] '+alert)

def add_event(target, evttype, *arg):
    invstack = [target]
    while '__parent' in target.__dict__:
        target = target.__dict__['__parent']
        invstack.append(target)

    eventlog = 'ActiveXObject'
    for obj in invstack:
        if obj.__dict__['__name'] == '__argument': 
            eventlog += str(obj.__dict__['__argument'])
        else: 
            eventlog += '.' + obj.__dict__['__name']

    if evttype == 'get': 
        eventlog += '.' + arg[0]
    if evttype == 'set': 
        eventlog += '.' + arg[0] + '=' + str(arg[1])
    if evttype == 'call': 
        eventlog += str(arg[0])
    eventlist.append(eventlog)

def write_log(filename):
    if not eventlist:
        config.VERBOSE(config.VERBOSE_DEBUG, '[DEBUG] in ActiveX.py: No ActiveXObject found.')
        return

    try:
        fd = open('log/' + filename, 'wb')
        for log in eventlist: 
            fd.write(log + '\n')
        fd.close()
        print 'Log written into: log/' + filename
    except IOError:
        pass
