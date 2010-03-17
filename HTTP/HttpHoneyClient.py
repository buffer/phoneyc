import sys
import pycurl
import os
import urlparse
import urllib2

import config

# TODO
# handle HTTPS by not enforcing certificate chain checks
# actually use the ignored domains bit

class ReadCallback(object):
    def __init__(self):
        self.contents = ''
	
    def body_cb(self, buf):
        self.contents += buf

class HttpHoneyClient(object):
    def __init__(self, user_agent='"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727)"'):
        #self.ua         = "Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.5) Gecko/20091109 Gentoo Firefox/3.5.5 GTB6"
        self.ua         = user_agent
        self.pages      = {} # for HTML only
        self.res        = {} # for all data
        self.responses  = {} # for POST responses
        self.ignores    = []
        self.headers    = ""
        self.pagecache   = {}

    def __saveurl(self, url):
        base = ""
        scheme, netloc, path, query, fragment = urlparse.urlsplit(url)
        
        if scheme:
            base += "%s://" % (scheme, )
        if netloc:
            base += "%s" % (netloc, )
        else:
            return

        try:
            envbase = os.environ['PHONEYC_URLBASE']
            os.environ['PHONEYC_URLBASE'] = "%s;%s" % (envbase, base, )
        except KeyError:
            os.environ['PHONEYC_URLBASE'] = base

    def __check_pdf(self, header):
        return header.startswith("Content-Type") and header.split("Content-Type:")[1].strip() == 'application/pdf'

    def __fetch(self, url, method="get", post_data = False, referrer = False):
        """hidden, called from get() or post()"""
        # TODO
        # http_proxy=http://localhost:8118  <-- not needed yet
        # auto-follow location headers (see curl -e)

        if config.cache_response:
            hashkey = url+method+str(post_data)+str(referrer)
            if self.pagecache.has_key(hashkey):
                self.headers = self.pagecache[hashkey][1]
                return self.pagecache[hashkey][0]

        reload(sys)
        sys.setdefaultencoding('utf-8')
        _cb = ReadCallback()

        if url.find("/",8) < 0:
           url += "/"
        url = urllib2.unquote(url)  
        if config.verboselevel >= config.VERBOSE_DEBUG:
           print "[DEBUG] in HttpHoneyClient.py: Fetching "+url+' Referrer:'+str(referrer)

        self.__saveurl(url)
        c = pycurl.Curl()
        c.setopt(pycurl.FOLLOWLOCATION, 1)
        c.setopt(pycurl.AUTOREFERER, 1)
        #c.setopt(pycurl.MAXREDIRS, 200)
        c.setopt(pycurl.URL, str(url))
        c.setopt(pycurl.WRITEFUNCTION, _cb.body_cb)
        c.setopt(pycurl.USERAGENT, self.ua)
        #c.setopt(pycurl.VERBOSE, 1)
        c.setopt(pycurl.HEADERFUNCTION, self.header)

        if post_data and method.lower() == "post": 
                c.setopt(pycurl.UPLOAD, 1)
                c.setopt(pycurl.READFUNCTION, post_data)
                c.setopt(pycurl.INFILESIZE, len(post_data))

        if referrer: 
                c.setopt(pycurl.REFERER, referrer)
 
        try:
                c.perform()
        except Exception, e:
                
            return ''

        c.close()

        res = _cb.contents

        for header in self.headers.split("\r\n"):
            if self.__check_pdf(header):
                from PDF.PDFAnalyzer import PDFAnalyzer
                
                p = PDFAnalyzer(res)
                p.run()
                return ''

        # "\xef\xbb\xbf" is the head of UTF-8, may cause spidermonkey to crash
        if _cb.contents.startswith("\xef\xbb\xbf"):
            res = _cb.contents[3:]

        #res = (res[3:] if res.startswith("\xef\xbb\xbf") else res) # "\xef\xbb\xbf" is the head of UTF-8, may cause spidermonkey to crash
        #res = res.decode('utf-8')

        if config.cache_response:
            self.pagecache[hashkey] = (res, self.headers)
        return res

    def header(self, s):
        self.headers += s

    def get(self, url, referrer=False):
        try: 
            res = self.__fetch(url, method = "get", referrer = referrer)
        except Exception: 
            raise
        self.res[url] = res
        return (res, self.headers)

    def post(self, url, post_data = False, referrer = False):
        try: 
            res = self.__fetch(url, method = "post", post_data = post_data, referrer = referrer)
        except Exception: 
            raise
        self.responses[url] = res
        return (res, self.headers)

    def ignore_domain(self, domain):
        self.ignores.append(domain)

    def ignored(self, hostname):
        for i in self.ignores:
            if hostname.endswith(i): 
                return True
        return False
