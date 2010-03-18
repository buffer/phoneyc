#!/usr/bin/env python
"""
Synopsis:
    PHoneyC: Pure python honeyclient implementation.

Usage:
    python phoneyc.py [ options ] url

Options:
    -h              , --help                        Display this help information.
    -l <filename>   , --logfile=<filename>          Output file name for logs.
    -v              , --verbose                     Explain what is being done (DEBUG mode).
    -d <debuglevel> , --debug=<debuglevel>          Debug Level.
    -r              , --retrieval-all               Retrieval all inline linking data.
    -c              , --cache-response              Cache the responses from the remote sites.
    -u <personality>, --user-agent=<personality>    Select a user agent (see below for values, default: 1)
"""

import sys, os, shutil 
import pycurl
import hashlib
import site
import getopt
from binascii import hexlify

site.addsitedir('lib/python')

import config
from DOM.DOM import DOM
import magic

DOWNLOADS_DIR = "log/downloads"
BINARIES_DIR  = "%s/binaries" % (DOWNLOADS_DIR, )
PDF_DIR       = "%s/pdf"      % (DOWNLOADS_DIR, )
APPLET_DIR    = "%s/applet"   % (DOWNLOADS_DIR, )
MISC_DIR      = "%s/misc"     % (DOWNLOADS_DIR, )

LOGDIRS       = (BINARIES_DIR, 
                 PDF_DIR,
                 APPLET_DIR,
                 MISC_DIR)

DOWNLOADS_STR = ["data", ]

USAGE_TEXT = __doc__

def usage():
    print USAGE_TEXT
    print "User Agents:"
    for ua in config.UserAgents:
        print "    [%d] %s" % (ua[0], ua[1], )
    print ""
    sys.exit(1)

def check_logdirs():
    for logdir in LOGDIRS:
        if not os.access(logdir, os.F_OK):
            try:
                os.makedirs(logdir)
            except OSError:
                pass

def download(url):
    f = hashlib.md5()
    f.update(url)
    filename = "%s/%s" % (BINARIES_DIR, f.hexdigest(), )

    fd = open(filename, 'wb')
    ua = config.userAgent
    
    c = pycurl.Curl()
    c.setopt(pycurl.FOLLOWLOCATION, 1)
    c.setopt(pycurl.URL, str(url))
    c.setopt(pycurl.WRITEDATA, fd)
    c.setopt(pycurl.USERAGENT, ua)

    try:
        c.perform()
        code = c.getinfo(pycurl.HTTP_CODE) 
        if code == 404:
            if config.verboselevel >= config.VERBOSE_DEBUG:
                print "[DEBUG] 404 File Not Found: "+url
            fd.close()
            os.remove(filename)
            return
    except:
        import traceback
        traceback.print_exc(file = sys.stderr)
        sys.stderr.flush()

    c.close()
    fd.close()

    statinfo = os.stat(filename)
    if not statinfo.st_size:
        os.remove(filename)
        return

    fd = open(filename, 'r')
    h = hashlib.md5()
    h.update(fd.read())
    newfilename = "%s/%s" % (BINARIES_DIR, h.hexdigest(), )
    shutil.move(filename, newfilename)
    fd.close()

    if config.verboselevel >= config.VERBOSE_DEBUG:
        print "[DEBUG] Downloaded File: %s from %s" % (h.hexdigest(), url)

def report(alerts):
    for alert in alerts:
        print "\n===================================="
        if alert.atype == "ALERT_SHELLCODE":
            print "|--------AID:" + str(alert.aid) + "----------"
            print "|ATYPE:"       + str(alert.atype)
            print "|MESSAGE:"     + str(alert.msg)
            print "|MISC:"        + str(alert.misc)
            print "|LENGTH:"      + str(len(alert.shellcode))
            print "|SHELLCODE:"
            print hexlify(alert.shellcode)
            print "|Now run it:"
            shellcoderesult = alert.run_shellcode()
            print str(shellcoderesult)
            for item in shellcoderesult:
                if item['name'] == 'URLDownloadToFile':
                    url = item['arguments'][1][2][2]
                    print "Downloading from URL: %s" % url
                    download(url)

        if alert.atype == "ALERT_HEAPSPRAY":
            print "|--------AID:" + str(alert.aid) + "----------"
            print "|ATYPE:"       + str(alert.atype)
            print "|MESSAGE:"     + str(alert.msg)
            print "|HIT:"         + str(alert.hit)
            print "|MEMUSAGE:"    + str(alert.memusage)
            print "|LENGTH:"      + str(alert.length)
            print "|ENTROPY:"     + str(alert.entropy)
            print "|MISC:"        + str(alert.misc)

if __name__ == "__main__":
    args = sys.argv[1:]
    try:
        options, args = getopt.getopt(args, 'hu:l:vd:rc',
            ['help', 
             'user-agent=', 
             'logfile=', 
             'verbose',
             'debug=', 
             'retrieval-all',
             'cache-response'
            ])
    except getopt.GetoptError, exp:
        usage()

    if not options and not args:
        usage()

    for option in options:
        if option[0] == '-h' or option[0] == '--help':
            usage()
        if option[0] == '-u' or option[0] == '---user-agent':
            for ua in config.UserAgents:
                if option[1] == str(ua[0]):
                    config.userAgent    = str(ua[2])
                    config.appCodeName  = str(ua[3])
                    config.appName      = str(ua[4])
                    config.appVersion   = str(ua[5])
        if option[0] == '-l' or option[0] == '--logfile':
            config.logfilename = option[1]
        if option[0] == '-v' or option[0] == '--verbose':
            config.verboselevel = 1
        if option[0] == '-d' or option[0] == '--debug':
            config.verboselevel = int(option[1])
        if option[0] == '-r' or option[0] == '--retrieval-all':
            config.retrieval_all = True
        if option[0] == '-c' or option[0] == '--cache-response':
            config.cache_response = True

    config.initial_URL = args[0]
    
    check_logdirs()
    phoneycdom = DOM(config.initial_URL)
    alerts = phoneycdom.analyze()
    if config.verboselevel >= config.VERBOSE_ALERT:
        if alerts:
            report(alerts)
        else:
            print "No Shellcode/Heapspray Alerts."

    binaries_dir = os.listdir(BINARIES_DIR)
    for file in binaries_dir:
        filename = "%s/%s" % (BINARIES_DIR, file,)
        newname  = "%s/%s" % (MISC_DIR, file, )
        if magic.file(filename) in DOWNLOADS_STR:
            shutil.move(filename, newname)
