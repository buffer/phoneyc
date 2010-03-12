import sys, os, shutil 
import pycurl
import hashlib
import site
from binascii import hexlify

site.addsitedir('lib/python')

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
    ua = "Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.5) Gecko/20091109 Gentoo Firefox/3.5.5 GTB6"
    
    c = pycurl.Curl()
    c.setopt(pycurl.FOLLOWLOCATION, 1)
    c.setopt(pycurl.URL, str(url))
    c.setopt(pycurl.WRITEDATA, fd)
    c.setopt(pycurl.USERAGENT, ua)

    try:
        c.perform()
        code = c.getinfo(pycurl.HTTP_CODE) 
        if code == 404:
            print "File Not Found"
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

    print "Downloaded file: %s" % (h.hexdigest(), )

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
    check_logdirs()
    phoneycdom = DOM(sys.argv[1])
    alerts = phoneycdom.analyze()
    print str(alerts)
    if alerts:
        report(alerts)

    binaries_dir = os.listdir(BINARIES_DIR)
    for file in binaries_dir:
        filename = "%s/%s" % (BINARIES_DIR, file,)
        newname  = "%s/%s" % (MISC_DIR, file, )
        if magic.file(filename) in DOWNLOADS_STR:
            shutil.move(filename, newname)
