
class Plugin(dict):
    """A dictionary with attribute-style access. It maps attribute access to
    the real dictionary.  """
    def __init__(self, init = {}):
        dict.__init__(self, init)

    def __getstate__(self):
        return self.__dict__.items()

    def __setstate__(self, items):
        for key, val in items:
            self.__dict__[key] = val

    def __repr__(self):
        return "%s(%s)" % (self.__class__.__name__, dict.__repr__(self))

    def __setitem__(self, key, value):
        return super(Plugin, self).__setitem__(key, value)

    def __getitem__(self, name):
        return super(Plugin, self).__getitem__(name)

    def __delitem__(self, name):
        return super(Plugin, self).__delitem__(name)

    __getattr__ = __getitem__
    __setattr__ = __setitem__


ShockwaveFlashPlugin = Plugin({'name'        : 'Shockwave Flash',
                               'filename'    : 'C:\\WINDOWS\\system32\\Macromed\\Flash\\NPSWF32.dll',
                               'description' : 'Shockwave Flash 10.0 r42'})

AdobeAcrobatPlugin   = Plugin({'name'        : 'Adobe Acrobat',
                               'filename'    : 'C:\\Program Files\\Internet Explorer\\PLUGINS\\nppdf32.dll',
                               'description' : 'Adobe Acrobat Plug-In'})

AdobePDFPlugin       = Plugin({'name'        : 'Adobe PDF',
                               'filename'    : 'C:\\Program Files\\Internet Explorer\\PLUGINS\\nppdf32.dll',
                               'description' : 'Adobe PDF Plug-In'})


from Array import Array
Plugins = Array()
Plugins.append(ShockwaveFlashPlugin)
Plugins.append(AdobeAcrobatPlugin)
Plugins.append(AdobePDFPlugin)

class Navigator(object):
    appCodeName         = "Mozilla"                                             # The internal "code" name of the current browser 
    appName             = "Microsoft Internet Explorer"                         # The official name of the browser
    appVersion          = "4.0 (compatible; MSIE 6.0; Windows NT 5.1)"          # The version of the browser as a string 
    buildID             = ""                                                    # The build identifier of the browser (e.g. "2006090803") 
    cookieEnabled       = True                                                  # A boolean indicating whether cookies are enabled    
    language            = ""                                                    # A string representing the language version of the browser
    mimeTypes           = []                                                    # A list of the MIME types supported by the browser     
    onLine              = True                                                  # A boolean indicating whether the browser is working online  
    oscpu               = ""                                                    # A string that represents the current operating system    
    platform            = ""                                                    # A string representing the platform of the browser     
    plugins             = Plugins                                               # An array of the plugins installed in the browser     
    product             = ""                                                    # The product name of the current browser (e.g. "Gecko") 
    productSub          = ""                                                    # The build number of the current browser (e.g. "20060909")       
    securityPolicy      = ""                                                    # An empty string. In Netscape 4.7x, returns "US & CA domestic policy" or "Export policy". 
    userAgent           = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"  # The user agent string for the current browser   
    vendor              = ""                                                    # The vendor name of the current browser (e.g. "Netscape6")   
    vendorSub           = ""                                                    # The vendor version number (e.g. "6.1") 
    appMinorVersion     = ""
    browserLanguage     = ""
    cpuClass            = ""
    systemLanguage      = "" 	
    userLanguage        = "en-us"
      
    # Indicates whether the host browser is Java-enabled or not.   
    def javaEnabled(self, *arg): 
        return True

    # Lets code check to see if the document at a given URI is 
    # available without using the network. 
    def mozIsLocallyAvailable(self, *arg): 
        return False
       
    # Sets a user preference. 
    # self method is only available to privileged code, and you 
    # should use XPCOM Preferences API instead. 
    def preference(self, *arg): 
        pass
   
    # Allows web sites to register themselves as a possible handler 
    # for a given MIME type. 
    def registerContentHandler(self, *arg): 
        pass
   
    # New in Firefox 3         
    # Allows web sites to register themselves as a possible handler 
    # for a given protocol. 
    def registerProtocolHandler(self, *arg): 
        pass
  
    # Obsolete       
    # Returns false. JavaScript taint/untaint functions removed in 
    # JavaScript 1.2[1] 
    def taintEnabled(self, *arg): 
        return False


