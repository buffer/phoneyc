#!/usr/bin/env python

from honeyclient import *
import md5, popen2, sys, time

hc = HttpHoneyClient()
hc.ignore_domain('.google.com')
hc.maxdepth = 4
hc.cnt = 0

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

def main():
    start = time.time()
    print 'HoneyWalk started at %s UTC' % time.asctime(time.gmtime())
    try: walk(hc, sys.argv[1], False, [], {sys.argv[1]: 0})
    except KeyboardInterrupt: print ''
    end = time.time()

    print 'walked %d URLs in %f seconds' % (hc.cnt, end-start)

if __name__ == '__main__':
    main()

