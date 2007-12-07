#!/usr/bin/env python

# TODO
# javascript: handler

import md5, popen2, os, re, sets
from sgmllib import SGMLParser, SGMLParseError
import magic
from ActiveX import *
try:
    import vb2py
    from vb2py.vbfunctions import *
    from vb2py.vbparser import convertVBtoPython, VBCodeModule
    VBS_ENABLED = True
except ImportError:
    VBS_ENABLED = False



JS_DOCUMENT = """
// AUTOMATICALLY ADDED BY PHONEYC HONEYCLIENT

// hacked up way to see the code and handle eval() within it
real_eval = eval;
var codeBlocks = new Array();
function eval(arg) {
    try 
    { 
        if(codeBlocks.indexOf(arg) == -1)
        {
            codeBlocks.push(arg)
            print(arg); 
            real_eval(arg);
        }
    } 
    catch (e) 
    { 
        print("eval() exception: " + e.toString());
    };
}

function alert(s) {
    print("ALERT");
    print(s);
}


function Element(s) {
    this.children = new Array();
    this.ElementName = s
    // return new String(s);
    this.setAttribute=function(o, v)
    {
       this.o = v;
       this.name = this.name + " " + o + "=" + v;
    }
    this.style = new object();
    this.appendChild=function(s)
    {
        e = new Element(s);
        this.children.push(e);
    }

    this.print=function()
    {
        print('<' + this.ElementName + '>');
        for (i in this.children) {
            this.children[i].print();
        }
    }
}

// declare a globally-accessible document object
function my_document () {
  this.elements = new Array();
  this.m_property="";
  this.cookie="";
  this.referrer = '';
  this.write=function(s)
  {
     print(s);
  }
  this.writeln=function(s)
  {
     print(s);
  }
  this.createElement=function(s)
  {
    // print("createElement " + s.toString());
    this.elements[s] = new Element(s);
    this.elements[s].print();
    return new Element(s);
  }
  this.getElementById=function(s)
  {
    print("getElementById " + s.toString());
    // return new Element(s);
    return this.elements[s];
  }
};
var document=new my_document();

function new_location(prop, oldv, newv) {
    print("document.write(\\"<a href=" + newv + ">" + newv + "</a>\\");");
}
function my_location() {
       this.href='';
       this.watch('href', new_location);
       this.reload = function() {
               return;
       }
}
var location = new my_location();
document.location = location;
document.watch('location', new_location)

function object() {
    this.history = '';
    this.document = new my_document();
    this.navigator = function(x) 
    {
        this.userAgent = '';
        this.appVersion = '';
        this.platform = 'Win32';
    }
    this.open=function(url) { return; }
}

var window = new object();
window.navigator.userAgent = '';
window.navigator.appVersion = '';
window.navigator.platform = 'Win32';
window.RegExp = RegExp;
window.parseInt = parseInt;
window.String = String;
window.location = '';
var navigator = window.navigator;
var self = new object();
var productVersion = '';
navigator.appName="Microsoft Internet Explorer"
navigator.appVersion="4.0 (compatible; MSIE 6.0; Windows NT 5.1)"
navigator.userAgent="Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"
navigator.userLanguage = 'en-us';
var self = new object();
var productVersion = '';
var clientInformation = new object()
clientInformation.appMinorVersion='';

function ClientCaps () {
       this.isComponentInstalled=function(arg0, arg1) {
               return(false);
       }
       this.getComponentVersion=function(arg0, arg1) {
               return(NULL);
       }
}

var top = new object();
top.document = document;

function setTimeout(todo, when) {
    // print ('setTimeout - ' + todo + ', ' + when);
    return(eval(todo));
}
window.setTimeout = setTimeout

"""

VBS_DOCUMENT = """
from vb2py.vbfunctions import *

# THIS SECTION ADDED BY PHONEYC HONEYCLIENT

import string
Replace = string.replace
mid = Mid

# used in the HTML document we create

# failures in file opening
class FileNotFound(object):
    def readall(self):
        return 'off'

# from createObject()
class MyObject(object):
    def __init__(self, name, value):
        self.name = name
        self.value = value

    def GetSpecialFolder(self, *args):
        return '/tmp'

    def CreateTextFile(self, path):
        path = path.replace('\\\\', '/')
        return open(path, 'wb')

    def opentextfile(self, path):
        path = path.replace('\\\\', '/')
        try: return open(path, 'rb')
        except: return FileNotFound()

    def Open(self, path):
        path = path.replace('\\\\', '/')
        print '%s.Open - %s' % (self, path)

    def __repr__(self):
        return self.name

# HTML/XML elements
class Element(object):
    def __init__(self, name):
        self.name = name

    def CreateObject(self, o, v):
        return MyObject(o, v)

    def setAttribute(self, name, val):
        setattr(self, name, val)

    createobject = CreateObject
    createObject = CreateObject

# HTML document
class Doc(object):
    def __init__(self): pass

    def createElement(self, name):
        return Element(name)

    def write(self, s): print(s)

document = Doc()



vbBinaryCompare = 0
VBBinaryCompare = vbBinaryCompare
vbTextCompare = 1
VBTextCompare = vbTextCompare
vbDatabaseCompare = 2

def InStr(*args):
    comp = 0
    if isinstance(args[0], int):
        start = args[0]
        s = args[1]
        subs = args[2]
        if len(args) > 3: comp = args[3]
    else:
        start = 0
        s, subs = args[0], args[1]
    if comp == 0 or comp == 2: ret =  s.find(subs, start) + 1
    elif comp == 1: ret = s.lower().find(subs.lower(), start) + 1
    return ret

"""

class HttpHoneyClient(object):
    def __init__(self, user_agent='"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727)"'):
       self.ua = user_agent
       self.pages = {}     # for HTML only
       self.res = {}       # for all data
       self.responses = {} # for POST responses
       self.ignores = []

    def __fetch(self, url, method="get", post_data=False, referrer=False):
        """hidden, called from get() or post()"""

        # TODO
        # http_proxy=http://localhost:8118  <-- not needed yet
        # auto-follow location headers (see curl -e)
        if post_data and method == "post": post_data = '-d "%s"' % post_data
        else: post_data=""
        if referrer: referrer = '-e "%s"'  % referrer
        else: referrer = ""
        self.ua = self.ua.replace('"', '')
        p, w, e = popen2.popen3('curl -s -S -A "%s" %s %s "%s"' % (self.ua, post_data, referrer, url))
        res = p.read()
        err = e.read()
        p.close()
        e.close()
        w.close()
        if len(err): raise Exception, '%s -- %s' % (url, err.strip())
        else: return res

    def get(self, url, referrer=False):
        try: res = self.__fetch(url, method="get", referrer=referrer)
        except Exception: raise
        self.pages[url] = Page(res, url)
        self.res[url] = res
        return res

    def post(self, url, post_data=False, referrer=False):
        try: res = self.__fetch(url, method="post", post_data=post_data, referrer=referrer)
        except Exception: raise
        self.responses[url] = res
        return res

    def ignore_domain(self, domain):
        self.ignores.append(domain)

    def ignored(self, hostname):
        for i in self.ignores:
            if hostname.endswith(i): return True
        return False

    def js_eval(self, url='', html=''):
        self.pages[url].js_run_cnt += 1
        if len(html.strip()) == 0:
            try: body = self.pages[url].js_body
            except KeyError: 
                raise Exception, 'No page in cache for %s' % url
        else:
            try: page = Page(html, '')
            except SGMLParseError: page = Page('', '')
            self.pages[url].js_script_srcs.extend(page.js_script_srcs)
            body = page.js_body

        # handle remote srcs
        for src in self.pages[url].js_script_srcs:
            if src.startswith('http:') or src.startswith('https:'):
                try: res = self.__fetch(src, referrer=url)
                except Exception, e: res = ''
                body += res

        h = md5.md5(body).hexdigest()
        f = open('/tmp/%s' % h, 'w')
        f.write(JS_DOCUMENT + '\n')
        f.write(body)
        f.close()
        p, w, e = popen2.popen3('/usr/local/bin/js /tmp/%s' % h)
        out = p.read()
        err = e.read()
        p.close()
        w.close()
        e.close()
        if err != '':
            if self.pages[url].js_run_cnt > 3: 
                return out, err, h
            out, err, av = self.js_eval(url=url, html='%s\n%s' % (Page(out, '').contents, body))
        return out, err, h

    def vbs_eval(self, url='', html=''):
        if not VBS_ENABLED: raise NotImplemented, 'No VBS support'
        if len(html.strip()) == 0:
            try: body = self.pages[url].vbs_body
            except KeyError:
                raise Exception, 'No page in cache for %s' % url
        else: 
            page = Page(html, '')
            self.pages[url].vbs_script_srcs.extend(page.vbs_script_srcs)
            body = page.vbs_body
   
        # handle remote srcs
        for src in self.pages[url].vbs_script_srcs:
            if src.startswith('http:') or src.startswith('https:'):
                res = self.__fetch(src, referrer=url)
                body += res

        body = body.replace('Const ', '')
        vbs_py = convertVBtoPython(body)
        vbs_py = vbs_py.replace(' Mod ', ' % ')
	
        f = open('/tmp/vbs_tmp.py', 'w')
        f.write(VBS_DOCUMENT + vbs_py)
        f.close()
	
        p, w, e = popen2.popen3('/usr/bin/env python /tmp/vbs_tmp.py')
        out = p.read()
        err = e.read()
        p.close()
        w.close()
        e.close()
        return out, err 

class Page(object):
    # use the self.url to handle relative path for script srcs
    # build, store, return js and vbs content
    def __init__(self, contents, url):
        url = self.fixup(url)
        self.url = url
        self.baseurl = '/'.join(url.split('/')[:-1])  # for relative links
        self.site = '/'.join(url.split('/')[:3])      # for absolute URIs (not URLs)
        self.scripturl = url.split('?')[0]            # for new script args
        self.contents = contents
        parser = PageParser()
        parser.feed(self.contents)
        parser.close()
        self.content_type = magic.whatis(contents)
        self.vbs_body = '\n'.join(parser.vbs_body).replace('<!--', '').replace('-->','')
        self.js_body = ''.join(parser.js_body).replace('<!--', '').replace('-->','') + parser.onload
        self.js_body += '\nprint(page_alerts);\n'
        self.js_run_cnt = 0
        if 'html' not in self.content_type.lower() and 'sgml' not in self.content_type.lower() and 'text' not in self.content_type.lower():
            self.links = []
            self.js_script_srcs = []
            self.vbs_script_srcs = []
        self.hrefs = list(sets.Set(parser.hrefs))
        for h in sets.Set(parser.hrefs):
            if not h.startswith('http:') and not h.startswith('https:'):
                if h.startswith('/'): self.hrefs.append('%s%s' % (self.site, h))
                elif h.startswith('?'): self.hrefs.append('%s%s' % (self.scripturl, h))
                else: self.hrefs.append('%s/%s' % (self.baseurl, h))
        self.iframes = list(sets.Set(parser.iframes))
        for i in sets.Set(parser.iframes):
            if not i.startswith('http:') and not i.startswith('https:'):
                if i.startswith('/'): self.iframes.append('%s%s' % (self.site, i))
                elif i.startswith('?'): self.iframes.append('%s%s' % (self.scripturl, i))
                else: self.iframes.append('%s/%s' % (self.baseurl, i))
        self.imgs = list(sets.Set(parser.imgs))
        for i in sets.Set(parser.imgs):
            if not i.startswith('http:') and not i.startswith('https:'):
                if i.startswith('/'): self.imgs.append('%s%s' % (self.site, i))
                elif i.startswith('?'): self.imgs.append('%s%s' % (self.scripturl, i)) 
                else: self.imgs.append('%s/%s' % (self.baseurl, i))
        self.objects = list(sets.Set(parser.objects))
        for o in sets.Set(parser.objects):
            if not o.startswith('http:') and not o.startswith('https:'):
                if o.startswith('/'): self.objects.append('%s%s' % (self.site, o))
                elif o.startswith('?'): self.objects.append('%s%s' % (self.scripturl, o))
                else: self.objects.append('%s/%s' % (self.baseurl, o))
        self.frames = list(sets.Set(parser.frames))
        for i in sets.Set(parser.frames):
            if not i.startswith('http:') and not i.startswith('https:'):
                if i.startswith('/'): self.frames.append('%s%s' % (self.site, i))
                elif i.startswith('?'): self.frames.append('%s%s' % (self.scripturl, i))
                else: self.frames.append('%s/%s' % (self.baseurl, i))
        self.js_script_srcs = list(sets.Set(parser.js_script_srcs))
        for i in sets.Set(parser.js_script_srcs):
            if not i.startswith('http:') and not i.startswith('https:'):
                if i.startswith('/'): self.js_script_srcs.append('%s%s' % (self.site, i))
                elif i.startswith('?'): self.js_script_srcs.append('%s%s' % (self.scripturl, i))
                else: self.js_script_srcs.append('%s/%s' % (self.baseurl, i))
        self.vbs_script_srcs = list(sets.Set(parser.vbs_script_srcs))
        for i in sets.Set(parser.vbs_script_srcs):
            if not i.startswith('http:') and not i.startswith('https:'):
                if i.startswith('/'):
                    self.vbs_script_srcs.append('%s%s' % (self.site, i))
                elif i.startswith('?'):
                    self.vbs_script_srcs.append('%s%s' % (self.scripturl, i))
                else: self.vbs_script_srcs.append('%s/%s' % (self.baseurl, i))
        self.links = self.hrefs + self.iframes + self.objects + self.imgs + self.frames

    def fixup(self, url):
        """
        fixes a URL that may lack a required trailing slash. without it
        we don't get proper relative URLs.
        """
        c = 0
        for i in url:
            if i == '/': c += 1
        if c < 3: return '%s/' % url
        else: return url

class PageParser(SGMLParser):
    def reset(self):                              
        SGMLParser.reset(self)
        self.a = ActiveX()
        self.js_body = []
        self.vbs_body = []
        self.js_script_srcs = []
        self.vbs_script_srcs = []
        self.js_inScript = False
        self.vbs_inScript = False
        self.hrefs = []
        self.iframes = []
        self.imgs = []
        self.frames = []
	self.objects = []
        self.clsids = []
        self.onload = '\n'
        self.js_body.append(self.a.js_body)

    def start_body(self, attrs):
        for k, v in attrs:
            if k.lower() == 'onload':
                if v not in self.onload:
                    v = re.sub('JavaScript:', '', v, re.IGNORECASE)
                    v = re.sub('return', '', v, re.IGNORECASE)
                    self.onload += ' %s' % v

    def end_body(self): 
        pass

    def start_ie(self, attrs):
        for k, v in attrs:
            if k.lower() == 'id':
                self.onload += '%s = new ClientCaps();' % v

    def end_ie(self):
        pass

    def start_input(self, attrs):
        onload = False
        lang = False
        for k, v in attrs:
            if k.lower() == 'onclick':
                if v not in self.onload: onload = v
            if k.lower() == 'language':
                VBS_TYPES = [ x.lower() for x in ('VBS', 'VBScript', 'VisualBasic') ]
                if v.lower() in VBS_TYPES: lang = 'VB'
                else: lang = 'JS'
            if lang and onload:
                if lang == 'JS': self.onload += '\n%s;' % onload
                if lang == 'VB': self.onload += '\n%s' % onload

    def end_input(self):
        pass

    def start_iframe(self, attrs):
        for k, v in attrs:
 	    if k.lower() == 'src':
	        if v not in self.iframes: self.iframes.append(v)
	
    def end_iframe(self):
        pass
	
    def start_frame(self, attrs):
        for k, v in attrs:
 	    if k.lower() == 'src':
	        if v not in self.frames: self.frames.append(v)

    def end_frame(self):
        pass
	
    def start_a(self, attrs):
        for k, v in attrs:
	    if k.lower() == 'href':
	        if v not in self.hrefs: self.hrefs.append(v)
				
    def end_a(self):
        pass

    def start_meta(self, attrs):
        for k, v in attrs:
            if k.lower() == 'content' and 'url=' in v.lower():
                url = v.split(';')
                for u in url:
                    if u.lower().startswith('url='):
                        url = re.sub('URL=', '', u, re.IGNORECASE)
                        url = url.replace('"', '')
                        if url not in self.hrefs: self.hrefs.append(url)

    def end_meta(self):
        pass

    def start_img(self, attrs):
        for k, v in attrs:
            if k.lower() == 'src':
                if v not in self.imgs: self.imgs.append(v)

    def end_img(self):
        pass

    def start_script(self, attrs):                
        # script defaults to JavaScript ...
        self.js_inScript = True

        script_types =  [ x.lower() for x in [ v for k, v in attrs ] ]
        # handle VBS explicitly
        VBS_TYPES = [ x.lower() for x in ('VBS', 'VBScript', 'VisualBasic') ]
        for t in VBS_TYPES:
            if t in script_types:
                self.vbs_inScript = True
                self.js_inScript = False
        # do we have a separate location for the script?
        for k, v in attrs:
            if k.lower() == 'src':
                if self.js_inScript:
                    if v not in self.js_script_srcs: self.js_script_srcs.append(v)
                elif self.vbs_inScript:
                    if v not in self.vbs_script_srcs: self.vbs_script_srcs.append(v)
        # when in a script body, set literal to be True. this is because
        # SGML parsers will intercept things like foo<bar and '<v:rect' 
        # and think it's a tag, munging up the content
        self.literal = 1
    
    def end_script(self):
        if self.js_inScript:
            if not self.js_body[-1].endswith(';'):
                self.js_body.append(';')
        self.vbs_inScript = False
        self.js_inScript = False
        self.literal = 0

    def start_object(self, attrs):
        for k, v in attrs:
            if k.lower() == 'data':
                if v not in self.objects: self.objects.append(v)
            # handle ActiveX classid definitions, bring in javascript mock objects
            if k.lower() == 'classid':
                if v.upper() not in self.clsids:
                    v = v.upper().replace('CLSID:', '')
                    v = v.replace('{', '').replace('}', '')
                    self.clsids.append(v)
                    obj_id = False
                    for i, j in attrs:
                        if i == 'id': obj_id = j
                    obj = self.a.get_obj_by_clsid(v)
                    if not obj: 
                        print 'UNKNOWN CLSID: %s' % v
                        continue                	# we don't know about it
                    if obj_id:
                        code = '\n%s = new %s();' % (obj_id, obj.classname)
                        self.js_body.append(code) 
                        break

    def end_object(self):
        pass	        

    def characters(self, content):
        self.text = self.text + content

    def handle_data(self, text):           
        if self.js_inScript: self.js_body.append(text)
        if self.vbs_inScript: self.vbs_body.append(text)

LINKS = ('http://www.google.com/', )

# basic tests, demo, etc
if __name__ == '__main__':
    hc = HttpHoneyClient()
    for l in LINKS:
        print 'fetching %s' % l
        try: hc.get(l)
        except: pass
    for l in LINKS:
        print '==>', l
        try: print 'JS EVAL', hc.js_eval(l)[0]
        except Exception: pass
        try: print 'VBS EVAL', hc.vbs_eval(l)[0]
        except Exception: pass
        try: print 'IFRAMES', hc.pages[l].iframes
        except Exception: pass
        try: print 'HREFS', hc.pages[l].hrefs
        except Exception: pass
        try: print 'FRAMES', hc.pages[l].frames
        except Exception: pass
        try: print 'IMAGES', hc.pages[l].imgs
        except Exception: pass

        print '\n\n-----\n\n'
