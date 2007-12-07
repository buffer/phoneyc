#!/usr/bin/env python

from honeyclient import *
import getopt, md5, popen2, sys, time

hc = HttpHoneyClient()
hc.ignore_domain('.google.com')
hc.maxdepth = 4
hc.cnt = 0
hc.digraph = []

def usage(progname):
    usagestr = """%s [-d] url
HoneyClient spider tool

OPTIONS:
    -d 		output a Graphviz directed graph
		of URLs walked
""" % progname
    print usagestr
    sys.exit(1)

def scan(body):
    c = {'ClamAV': clamscan(body)}
    return c

def clamscan(body):
    m = md5.md5(body).hexdigest()
    if len(body) == 0: return '-'
    try:
        os.stat('/tmp/clamd')
    except OSError: return m, '!!!'
    f = open('/tmp/hc-walk-scan-%s' % m, 'wb')
    f.write(body)
    f.close()
    o, i, e = popen2.popen3('/usr/local/bin/clamdscan /tmp/hc-walk-scan-%s' % m)
    try: r = o.read().split('\n')[0].split(':')[1].strip()
    except IndexError: r = '???'
    o.close()
    i.close()
    e.close()
    return m, r

def walk(hc, URL, referrer, visited, depth):
    if referrer and not depth.has_key(URL): 
        depth[URL] = depth[referrer] + 1
    if depth[URL] > hc.maxdepth: return
    hc.cnt += 1
    if referrer: hc.digraph.append('\t"%s" -> "%s";' % (referrer, URL))
    else: hc.digraph.append('\t%s [shape=box, color=lightblue, style=filled];' % URL)

    print "===> %s " % URL,
    visited.append(URL)
    try: res = hc.get(URL, referrer=referrer)
    except Exception, e: 
        print e
        return
    js = hc.js_eval(URL)
    repeat = True
    newjs = js
    run_cnt = 0
    while repeat:
        if 'document.write' in newjs[0].lower() or '<script' in newjs[0].lower():
            if run_cnt < 10:
                page = Page(newjs[0], URL)
                newjs = hc.js_eval(url=URL, html=page.contents)
                run_cnt += 1
                js += newjs
                hc.pages[URL].links += page.links
        else:
            repeat = False
            break
    print js, 
    print scan(js[0])
    #print hc.vbs_eval(url=URL, html=page.contents)
    #vbs = hc.vbs_eval(URL)
    for url in hc.pages[URL].links:
        if url not in visited and url.startswith('http'):
            host = url.split('/')[2]
            if not hc.ignored(host):
                walk(hc, url, URL, visited, depth)

def main(argv):
    try: opts, args = getopt.getopt(argv[1:], 'dh')
    except: usage(sys.argv[0])

    do_dot = False
    for o, a in opts:
        if o == '-d': do_dot = True
        else: usage(sys.argv[0])
    url = args[0]

    start = time.time()
    print 'HoneyWalk started at %s UTC' % time.asctime(time.gmtime())
    try: walk(hc, url, False, [], {url: 0})
    except KeyboardInterrupt: print ''
    end = time.time()

    if do_dot:
        print 'walked %d URLs in %f seconds' % (hc.cnt, end-start)
        print '\n\ndigraph "%s" {' % url
        print '%s\n}' % '\n'.join(hc.digraph)

if __name__ == '__main__':
    main(sys.argv)

