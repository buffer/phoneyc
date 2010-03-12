
from Array import Array
from Location import Location
from DOMObject import DOMObject
from PageParser import PageParser

class Document(DOMObject):
    def __init__(self, window, url, headers):
        self.tagName              = 'document'
        self.cookie               = ''
        self.location             = ''
        #self.implementation = unknown() # in order to skip browser detection. null and undefined in js both considered None in python, cause trouble
        self.children             = []
        self.childNodes           = Array()
        self.activeElement        = None
        self.contentWindow        = window
        self.URL                  = url
        self.__dict__['all']      = []
        self.__init_document(headers)

    def __init_document(self, headers):
        for header in headers:
            if header.startswith("Last-Modified"):
                import time
                p = header.split("Last-Modified:")[1].strip()
                try:
                    t = time.strptime(p, "%a, %d %b %Y %H:%M:%S GMT")
                except ValueError:
                    try:
                        t = time.strptime(p, "%a, %d %b %Y %H:%M:%SGMT")
                    except ValueError:
                        continue

                self.lastModified = "%.2d/%.2d/%.4d %.2d:%.2d:%.2d" % (t.tm_mon,
                                                                       t.tm_mday,
                                                                       t.tm_year,
                                                                       t.tm_hour,
                                                                       t.tm_min,
                                                                       t.tm_sec)
            if header.startswith("Set-Cookie"):
                p = header.split("Set-Cookie:")[1].strip()
                if self.cookie:
                    self.cookie += ";"
                self.cookie += p

            if header.startswith("Location"):
                p = header.split("Location:")[1].strip()
                self.location = p
                self.referrer = self.location.href

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
        if 'parser' not in self.contentWindow.__dict__['__sl'][-1].__dict__:
            self.contentWindow.__dict__['__sl'][-1].parser = \
            PageParser(self.contentWindow,
                       self.contentWindow.__dict__['__sl'][-1],
                       html)
        else: 
            self.contentWindow.__dict__['__sl'][-1].parser.feed(html)

    def writeln(self, html):
        self.write(html+'\n')


