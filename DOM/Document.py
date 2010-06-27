import time
import config
from Array import Array
from Location import Location
from DOMObject import DOMObject
from PageParser import PageParser

class Document(DOMObject):
    def __init__(self, window, url, headers):
        self.tagName              = 'document'
        self.cookie               = ''
        self.referrer             = ''
        self.location             = url
        #self.implementation = unknown() # in order to skip browser detection. null and undefined in js both considered None in python, cause trouble
        self.children             = []
        self.childNodes           = Array()
        self.activeElement        = None
        self.contentWindow        = window
        self.URL                  = url
        self.__dict__['all']      = []
        self.__init_document(window, headers)

    def __init_lastmodified(self, header):
        
        p = header.split("Last-Modified:")[1].strip()
        try:
            t = time.strptime(p, "%a, %d %b %Y %H:%M:%S GMT")
        except ValueError:
            try:
                t = time.strptime(p, "%a, %d %b %Y %H:%M:%SGMT")
            except ValueError:
                config.VERBOSE(config.VERBOSE_WARNING, 
                               '[WARNING] Error while parsing lastModified [Document.py]')
                self.lastModified = ''
                return 

        fmt = "%.2d/%.2d/%.4d %.2d:%.2d:%.2d"
        self.lastModified = fmt % (t.tm_mon, t.tm_mday, t.tm_year, t.tm_hour, t.tm_min, t.tm_sec)

    def __init_cookie(self, header):
        p = header.split("Set-Cookie:")[1].strip()
        if self.cookie:
            self.cookie += ";"
        self.cookie += p

    def __init_location(self, header):
        p = header.split("Location:")[1].strip()
        self.location = p
        self.referrer = self.location.href

    def __init_document(self, window, headers):
        if window.__dict__['__referrer']:
            self.referrer = window.__dict__['__referrer']

        for header in headers:
            if header.startswith("Last-Modified"):
                self.__init_lastmodified(header)

            if header.startswith("Set-Cookie"):
                self.__init_cookie(header)

            if header.startswith("Location"):
                self.__init_location(header)

    def __setattr__(self, name, val):
        if name == 'location':
            self.__dict__['location'] = Location(self, val)
            return

        if name == 'all': 
            return

        self.__dict__[name] = val

    def createElement(self, tag):
        DOMObject(self.contentWindow, tag, None)
        return self.all[-1]
    
    def getElementById(self, ID):
        for p in self.all:
            if p.id == ID:
                return p

    def getElementsByName(self, name):
        self.tempArray = []
        for p in self.all:
            if p.name == name: 
                self.tempArray.append(p)
        return self.tempArray

    def getElementsByTagName(self, tag):
        self.tempArray = []
        for p in self.all:
            if p.tagName == tag: 
                self.tempArray.append(p)
        return self.tempArray

    def write(self, html):
        html = str(html)
        config.VERBOSE(config.VERBOSE_DEBUG, '[DEBUG] in Document.py Document.write(ln)...')
        config.VERBOSE(config.VERBOSE_DETAIL, html)

        if 'parser' not in self.contentWindow.__dict__['__sl'][-1].__dict__:
            self.contentWindow.__dict__['__sl'][-1].parser = \
            PageParser(self.contentWindow,
                       self.contentWindow.__dict__['__sl'][-1],
                       html)
        else: 
            self.contentWindow.__dict__['__sl'][-1].parser.feed(html)

    def writeln(self, html):
        html = str(html)
        self.write(html+'\n')


