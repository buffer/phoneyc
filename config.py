"""
Explanation of VERBOSE_*

VERBOSE_ALERT   : This level will print all alerted raised by phoneyc. An alert
                  is defined as an real attack/exploit.
                  All such lines should have "[ALERT]" as their initial headers.
VERBOSE_WARNING : Suspicious attack/exploit behaviour. Maybe it's an attack,
                  but not sure.
                  All such lines should have "[WARNING]" as their initial headers.
VERBOSE_DEBUG   : Debug information
                  All such lines should have "[DEBUG]" as their initial headers.
VERBOSE_DETAIL  : Detail information, e.g. dump of the document.write/eval/SCRIPT 
                  tag codes. All printed messages that don't have a "[ALERT/WARNING/DEBUG]"
                  header can only be included in detail.
"""

import time

VERBOSE_ALERT    = 1
VERBOSE_WARNING  = 3
VERBOSE_REFGRAPH = 4
VERBOSE_DEBUG    = 5
VERBOSE_DETAIL   = 10

logfilename       = None
verboselevel      = 0
retrieval_all     = False
initial_URL       = None
cache_response    = False
replace_nonascii  = False
universal_activex = False

userAgent       = "Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)"
appCodeName     = "Mozilla"
appName         = "Microsoft Internet Explorer"
appVersion      = "4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)"

UserAgents = [
    (1 , 
     "Internet Explorer 6.1 (Windows XP)", 
     "Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
     "Mozilla",
     "Microsoft Internet Explorer",
     "4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)")
    ,
    (2 , 
     "Internet Explorer 7.0 (Windows XP)",
     "Mozilla/4.0 (Windows; MSIE 7.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)",
     "Mozilla",
     "Microsoft Internet Explorer",
     "4.0 (Windows; MSIE 7.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)"
    )
    ,
    (3,
     "Internet Explorer 8.0 (Windows XP)",
     "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; (R1 1.5); .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
     "Mozilla",
     "Microsoft Internet Explorer",
     "4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; (R1 1.5); .NET CLR 1.1.4322; .NET CLR 2.0.50727)"
    ),
    (4,
     "Internet Explorer 6.0 (Windows 2000)",
     "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
     "Mozilla",
     "Microsoft Internet Explorer",
     "4.0 (compatible; MSIE 6.0; Windows NT 5.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727)"
    )
]

def VERBOSE(level,message):
    global verboselevel
    if verboselevel >= level:
        print '['+time.strftime("%Y-%m-%d %H:%M:%S")+'] '+str(message)
