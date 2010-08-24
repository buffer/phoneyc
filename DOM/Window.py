
import sys, os
import traceback
import urlparse
import re
import types

import config
from honeyjs import Runtime
from Document import Document
from Navigator import Navigator
from ActiveX.ActiveX import *
from unknown import unknown
from DOMObject import DOMObject
from ClassFactory import DOMObjectFactory
from HTTP.HttpHoneyClient import hc
import dataetc

class History(object):
    """
        Class History

        Really simple class used to emulate DOM Window history
        attribute.
    """
    def __init__(self, document):
        self.length   = 1
        self.current  = str(document.location.href)
        self.next     = ''
        self.previous = ''

    def back(self):
        pass

    def forward(self):
        pass

    def go(self, num):
        pass

class Window(object):
    """
        Class Window

        Class used to emulate DOM Window objects. This class is really simple
        to understand once you understand how Spidermonkey works. Moreover it
        is quite simple to handle since such objects are located just below
        the root DOM object in the hierarchy and do not require special care.
        This class (and other ones too) makes use of the Python class attribute
        __dict__ in order to store attributes without invoking the __setattr__
        method.

	    Properties

        _content                Returns a reference to the content element in the current window.
        closed                  Indicates whether the current window is closed or not.
        Components              Returns an array of the components installed in the browser.
        controllers             Returns the XUL controller objects for the current chrome window.
        crypto                  Returns the browser crypto object
        defaultStatus           Gets/sets the status bar text for the given window.
        directories             Returns a reference to the directories toolbar in the current chrome.
        document                Returns a reference to the document that the window contains.
        frames                  Returns an array of the subframes in the current window.
        history                 Returns a reference to the history object.
        innerHeight             Gets/sets the height of the content area of the browser window.
        innerWidth              Gets/sets the height of the content area of the browser window.
        length                  Returns the number of frames in the window.
        location                Gets/sets the location, or current URL, of the window object.
        locationbar             Returns the locationbar object, whose visibility can be toggled in the window.
        menubar                 Returns the menubar object, whose visibility can be toggled in the window.
        name                    Gets/sets the name of the window.
        navigator               Returns a reference to the navigator object.
        navigator.appCodeName   Returns the internal "code" name of the current browser.
        navigator.appName       Returns the official name of the browser.
        navigator.appVersion    Returns the version of the browser as a string.
        navigator.cookieEnabled Returns a boolean indicating whether cookies are enabled in the browser or not.
        navigator.language      Returns a string representing the language version of the browser.
        navigator.mimeTypes     Returns a list of the MIME types supported by the browser.
        navigator.oscpu         Returns a string that represents the current operating system.
        navigator.platform      Returns a string representing the platform of the browser.
        navigator.plugins       Returns an array of the plugins installed in the browser.
        navigator.product       Returns the product name of the browser (e.g., "Gecko")
        navigator.productSub    Returns the product version number (e.g., "5.0")
        navigator.userAgent     Returns the user agent string for the current browser.
        navigator.vendor        Returns the vendor name of the current browser (e.g., "Netscape6")
        navigator.vendorSub     Returns the vendor version number (e.g., "6.1")
        opener                  Returns a reference to the window that opened this current window.
        outerHeight             Gets/sets the height of the outside of the browser window.
        outerWidth              Gets/sets the width of the outside of the browser window.
        pageXOffset             Gets the amount of content that has been hidden by scrolling to the right
        pageYOffset             Gets the amount of content that has been hidden by scrolling down.
        parent                  Returns a reference to the parent of the current window or subframe.
        personalbar             Returns the personalbar object, whose visibility can be toggled in the window.
        pkcs11                  Returns the pkcs11 object , which can be used to install drivers other software associated with the pkcs11 protocol.
        prompter                Returns a reference to the prompt window, if any, currently displayed.
        screen                  Returns a reference to the screen object associated with the window.
        screen.availHeight      Returns the amount of vertical space available to the window on the screen.
        screen.availLeft        Returns the first available pixel available from the left side of the screen.
        screen.availTop         Returns the first available pixel from the top of the screen available to the browser.
        screen.availWidth       Returns the amount of horizontal space in pixels available to the window.
        screen.colorDepth       Returns the color depth of the screen.
        screen.height           Returns the height of the screen in pixels.
        screen.left             Gets/sets the current distance in pixels from the left side of the screen.
        screen.pixelDepth       Gets/sets the bit depth of the screen.
        screen.top              Gets/sets the distance from the top of the screen.
        screen.width            Returns the width of the screen.
        screenX                 Returns the horizontal location of the mouse in pixels from the left.
        screenY                 Returns the vertical location of the mouse.
        scrollbars              Returns the scrollbars object, whose visibility can be toggled in the window.
        scrollX                 Returns the number of pixels that the document has already been scrolled horizontally.
        scrollY                 Returns the number of pixels that the document has already been scrolled vertically.
        self                    Returns an object reference to the window object itself.
        sidebar                 Returns a reference to the window object of the sidebar.
        status                  Gets/sets the text in the statusbar at the bottom of the browser.
        statusbar               Returns the statusbar object, whose visibility can be toggled in the window.
        title                   Returns the title of the current window.
        toolbar                 Returns the toolbar object, whose visibility can be toggled in the window.
        top                     Returns a reference to the topmost window in the window hierarchy.
        window                  Returns a reference to the current window.

    """
    def __init__(self, root, url, referrer = None):
        self.__dict__['__root']       = root
        self.__dict__['__html']       = ''
        self.__dict__['__headers']    = []
        self.__dict__['__timeout']    = []
        self.__dict__['__referrer']   = referrer # Window object
        self.__dict__['__lastscript'] = ''
        self.__dict__['__warning']    = True
        self.__init_url(url)
        self.__init_runtime()
        self.__init_html()
        self.__init_context()
        root.windows.append(self)

    def __init_url(self, url):
        """
            Initialize URL converting it to lowercase. This is what a normal
            browser will do.
        """
        scheme, netloc, path, query, fragment = urlparse.urlsplit(url)
        if scheme:
            self.__dict__['__scheme'] = str(scheme)
            self.__dict__['__url']    = urlparse.urlunsplit((scheme, netloc.lower(), path, query, fragment))
        else:
            self.__init_url(str("http://" + url))

    def __init_runtime(self):
        """
            Spidermonkey Runtime initialization. Context.switch_tracing will
            toggle the tracing in honeyjs.
        """
        self.__dict__['__rt'] = Runtime()
        self.__dict__['__rt'].switch_tracing(1)

    def __init_context(self):
        """
            Spidermonkey Context initialization.
        """
        document = Document(self)
        self.__dict__['__cx'] = self.__dict__['__rt'].new_context(alertlist = [])
        self.__dict__['__sl'] = []
        self.__dict__['__fl'] = [document]

        self.__init_properties(document)
        self.__init_methods()
        self.__finalize_context()

    def __finalize_context(self):
        self.__dict__['__cx'].execute("Event = function(){}")
        self.__dict__['__cx'].execute("function CollectGarbage() {};")
        self.__dict__['__cx'].execute("function quit() {};")
        self.__dict__['__cx'].execute("function prompt() {};")

        for clsname in dataetc.classlist:
            inits = {'window' : self, 
                     'tagName': dataetc.classtotag(clsname),
                     'parser' : None}
            self.__dict__['__cx'].add_global(clsname, DOMObjectFactory(clsname, inits))

    def __init_properties(self, document):
        self.__dict__['__cx'].add_global('window', self)
        self.__dict__['__cx'].add_global('self'  , self)
        self.__dict__['__cx'].execute("window.window = window;")

        self.__dict__['__cx'].add_global('document', document)
        self.__dict__['__cx'].execute("window.document = document;")
        
        self.__dict__['__cx'].add_global('location', document.location)
        self.__dict__['__cx'].execute("window.location = location;")

        self.__dict__['__cx'].add_global("ActiveXObject", ActiveXObject)

        self.__dict__['__cx'].add_global("navigator", Navigator())
        self.__dict__['__cx'].execute("window.navigator = navigator;")
        
        self.__dict__['__cx'].add_global("screen", unknown())
        self.__dict__['__cx'].execute("window.screen = screen;")

        if 'top_window' in self.__dict__['__root'].__dict__:
            if self.__dict__['__referrer']:
                top = self.__dict__['__referrer']
            else:
                top = self.__dict__['__root'].top_window
        else:
            top = self

        self.__dict__['__cx'].add_global("top", top)
        self.__dict__['__cx'].execute("window.top = top;")

        self.__dict__['__cx'].add_global("parent", top)
        self.__dict__['__cx'].execute("window.parent = parent;")

        self.__dict__['__cx'].add_global("history", History(document))
        self.__dict__['__cx'].execute("window.history = history;")

        self.__dict__['__cx'].execute("window.innerWidth = 400;")
        self.__dict__['__cx'].execute("window.innerHeight = 200;")
        self.__dict__['__cx'].execute("window.name = '';")
        
        self.__init_undefined_properties()

    def __init_undefined_properties(self):
        properties = ('external', 'opera', )

        for prop in properties:
            self.__dict__['__cx'].execute("window.%s = undefined;" % (prop, ))

    def __init_methods(self):
        for attr in dir(self):
            prefix = "_Window__window_%s_" % (config.browserTag, )
            if attr.startswith(prefix):
                p = attr.split(prefix)[1]
                self.__dict__['__cx'].add_global(p, getattr(self, attr))
                self.__dict__['__cx'].execute("window.%s = %s;" % (p, p, ))
    
    def __init_html(self):
        scheme = self.__dict__['__scheme']
        url    = self.__dict__['__url']
        
        if self.__dict__['__referrer'] and '__url' in self.__dict__['__referrer'].__dict__:
            referrer = self.__dict__['__referrer'].__dict__['__url']
        else:
            referrer = ''

        try:
            self.__dict__['__html'], headers = hc.get(url, referrer)
            if config.replace_nonascii:
                self.__dict__['__html'] = re.sub('[\x80-\xff]', ' ', self.__dict__['__html'])
            for header in headers.splitlines():
                self.__dict__['__headers'].append(header)
        except Exception, e:  
            traceback.print_exc()

    def __setattr__(self, name, val):
        if not name.startswith('__'):
            self.__dict__['__cx'].add_global(name, val)

        self.__dict__[name] = val

    def __getattr__(self, name):
        if name.startswith('__'): 
            return object.__getattr__(self, name)
        
        if self.__dict__['__cx'].execute('typeof ' + name + ' == "undefined"'):
            if self.__dict__['__warning']:
                print "[WARNING] Window Object missing attribute:  " + name
            return None

        return self.__dict__['__cx'].execute(name)

    # Window object methods
    #
    # alert         Displays an alert dialog.
    # back          Moves back one in the window history.
    # blur          Sets focus away from the window.
    # captureEvents Registers the window to capture all events of the specified type.
    # clearInterval Clears a delay that's been set for a specific function.
    # clearTimeout  Clears the delay set by window.setTimeout().
    # close         Closes the current window.
    # confirm       Displays a dialog with a message that the user needs to respond to.
    # dump          Writes a message to the console.
    # escape        Encodes a string.
    # focus         Sets focus on the current window.
    # forward       Moves the window one document forward in the history.
    # GetAttention  Flashes the application icon.
    # getSelection  Returns the selection (generally text).
    # home          Returns the browser to the home page.
    # moveBy        Moves the current window by a specified amount.
    # moveTo        Moves the window to the specified coordinates.
    # open          Opens a new window.
    # print         Prints the current document.
    # prompt        Returns the text entered by the user in a prompt dialog.
    # releaseEvents Releases the window from trapping events of a specific type.
    # resizeBy      Resizes the current window by a certain amount.
    # resizeTo      Dynamically resizes window.
    # scroll        Scrolls the window to a particular place in the document.
    # scrollBy      Scrolls the document in the window by the given amount.
    # scrollByLines Scrolls the document by the given number of lines.
    # scrollByPages Scrolls the current document by the specified number of pages.
    # scrollTo      Scrolls to a particular set of coordinates in the document.
    # setCursor     Changes the cursor.
    # setInterval   Set a delay for a specific function.
    # setTimeout    Sets a delay for executing a function.
    # sizeToContent Sizes the window according to its content.
    # stop          This method stops window loading.
    # unescape      Unencodes a value that has been encoded in hexadecimal (e.g., a cookie).
    # updateCommands

    def __window_alert(self, text):
        """
        Display an alert dialog with the specified text.
        Syntax

        window.alert(text) 

        Parameters

        text is a string of the text you want displayed in the alert dialog.
        """
        print str(text)
        config.VERBOSE(config.VERBOSE_DEBUG, '[DEBUG] alertmsg: ' + str(text))

    def __window_ie60_alert(self, text):
        self.__window_alert(text)

    def __window_ie61_alert(self, text):
        self.__window_alert(text)

    def __window_ie70_alert(self, text):
        self.__window_alert(text)

    def __window_ie80_alert(self, text):
        self.__window_alert(text)

    def __window_firefox_alert(self, text):
        self.__window_alert(text)


    def __window_back(self):
        """
        Returns the window to the previous item in the history.
        Syntax

        window.back() 

        Parameters

        None.
        """
        pass

    def __window_ie60_back(self):
        self.__window_back()

    def __window_ie61_back(self):
        self.__window_back()        

    def __window_ie70_back(self):
        self.__window_back()

    def __window_ie80_back(self):
        self.__window_back()

    def __window_firefox_back(self):
        self.__window_back()


    def __window_blur(self):
        """
        Shifts focus away from the window.
        Syntax

        window.blur() 

        Parameters

        None.
        """
        pass

    def __window_ie60_blur(self):
        self.__window_blur()

    def __window_ie61_blur(self):
        self.__window_blur()

    def __window_ie70_blur(self):
        self.__window_blur()

    def __window_ie80_blur(self):
        self.__window_blur()

    def __window_firefox_back(self):
        self.__window_blur()


    def __window_captureEvents(self, eventType):
        """
        Registers the window to capture all events of the specified type.
        Syntax

        window.captureEvents(Event.eventType) 

        Parameters

        eventType is a string
        """
        self.__window_alert(eventType)

    def __window_ie60_captureEvents(self, eventType):
        self.__window_captureEvents(eventType)

    def __window_ie61_captureEvents(self, eventType):
        self.__window_captureEvents(eventType)

    def __window_ie70_captureEvents(self, eventType):
        self.__window_captureEvents(eventType)

    def __window_ie80_captureEvents(self, eventType):
        self.__window_captureEvents(eventType)

    def __window_firefox_captureEvents(self, eventType):
        self.__window_captureEvents(eventType)


    def __window_clearInterval(self, intervalID):
        """
        Clears a delay that's been set for a specific function.
        Syntax

        window.clearInterval(intervalID) 

        Parameters

        intervalID is the ID of the specific interval you want to clear.
        """
        pass

    def __window_ie60_clearInterval(self, intervalID):
        self.__window_clearInterval(intervalID)

    def __window_ie61_clearInterval(self, intervalID):
        self.__window_clearInterval(intervalID)

    def __window_ie70_clearInterval(self, intervalID):
        self.__window_clearInterval(intervalID)

    def __window_ie80_clearInterval(self, intervalID):
        self.__window_clearInterval(intervalID)

    def __window_firefox_clearInterval(self, intervalID):
        self.__window_clearInterval(intervalID)


    def __window_clearTimeout(self, timeoutID):
        """
        Clears the delay set by window.setTimeout().
        Syntax

        window.clearTimeout(timeoutID) 

        Parameters

        timeoutID is the ID of the timeout you wish you clear.
        """
        pass

    def __window_ie60_clearTimeout(self, timeoutID):
        self.__window_clearTimeout(timeoutID)

    def __window_ie61_clearTimeout(self, timeoutID):
        self.__window_clearTimeout(timeoutID)

    def __window_ie70_clearTimeout(self, timeoutID):
        self.__window_clearTimeout(timeoutID)

    def __window_ie80_clearTimeout(self, timeoutID):
        self.__window_clearTimeout(timeoutID)

    def __window_firefox_clearTimeout(self, timeoutID):
        self.__window_clearTimeout(timeoutID)


    def __window_close(self):
        """
        Closes this window.
        Syntax

        window.close() 

        Parameters

        None.
        """
        pass

    def __window_ie60_close(self):
        self.__window_close()

    def __window_ie61_close(self):
        self.__window_close()

    def __window_ie70_close(self):
        self.__window_close()

    def __window_ie80_close(self):
        self.__window_close()

    def __window_firefox_close(self):
        self.__window_close()

    
    def __window_confirm(self, text):
        """
        Displays a dialog with a message that the user needs to respond to.
        Syntax

        result = window.confirm(text) 

        Parameters

        text is a string.

        result is a boolean value indicating whether OK or Cancel was selected.
        """
        return True

    def __window_ie60_confirm(self, text):
        return self.__window_confirm(text)

    def __window_ie61_confirm(self, text):
        return self.__window_confirm(text)

    def __window_ie70_confirm(self, text):
        return self.__window_confirm(text)

    def __window_ie80_confirm(self, text):
        return self.__window_confirm(text)

    def __window_firefox_confirm(self, text):
        return self.__window_confirm(text)


    def __window_dump(self, text):
        """
        Prints messages to the console.
        Syntax

        window.dump(text) 

        Parameters

        text is a string.
        """
        self.alert(text)

    def __window_ie60_dump(self, text):
        self.__window_dump(text)

    def __window_ie61_dump(self, text):
        self.__window_dump(text)

    def __window_ie70_dump(self, text):
        self.__window_dump(text)

    def __window_ie80_dump(self, text):
        self.__window_dump(text)

    def __window_firefox_dump(self, text):
        self.__window_dump(text)


    def __window_focus(self):
        """
        Sets focus on the window.
        Syntax

        window.focus() 

        Parameters

        None.
        """
        pass

    def __window_ie60_focus(self):
        self.__window_focus()

    def __window_ie61_focus(self):
        self.__window_focus()

    def __window_ie70_focus(self):
        self.__window_focus()

    def __window_ie80_focus(self):
        self.__window_focus()

    def __window_firefox_focus(self):
        self.__window_focus()


    def __window_forward(self):
        """
        Moves the window one document forward in the history.
        Syntax

        window.forward() 

        Parameters

        None.
        """
        pass

    def __window_ie60_forward(self):
        self.__window_forward()

    def __window_ie61_forward(self):
        self.__window_forward()

    def __window_ie70_forward(self):
        self.__window_forward()

    def __window_ie80_forward(self):
        self.__window_forward()

    def __window_firefox_forward(self):
        self.__window_forward()


    def __window_GetAttention(self):
        """
        Flashes the application icon to get the user's attention.
        Syntax

        window.GetAttention() 

        Parameters

        None.
        """
        pass

    def __window_ie60_GetAttention(self):
        self.__window_GetAttention()

    def __window_ie61_GetAttention(self):
        self.__window_GetAttention()

    def __window_ie70_GetAttention(self):
        self.__window_GetAttention()

    def __window_ie80_GetAttention(self):
        self.__window_GetAttention()

    def __window_firefox_GetAttention(self):
        self.__window_GetAttention()


    def __window_getSelection(self):
        """
        Returns the selection (generally text).
        Syntax

        selection = window.getSelection() 

        Parameters

        selection is a selection object.
        """
        return None

    def __window_ie60_getSelection(self):
        return self.__window_getSelection()

    def __window_ie61_getSelection(self):
        return self.__window_getSelection()

    def __window_ie70_getSelection(self):
        return self.__window_getSelection()

    def __window_ie80_getSelection(self):
        return self.__window_getSelection()

    def __window_firefox_getSelection(self):
        return self.__window_getSelection()


    def __window_home(self):
        """
        Returns the window to the home page.
        Syntax

        window.home() 

        Parameters

        None.
        """
        pass

    def __window_ie60_home(self):
        self.__window_home()

    def __window_ie61_home(self):
        self.__window_home()

    def __window_ie70_home(self):
        self.__window_home()

    def __window_ie80_home(self):
        self.__window_home()

    def __window_firefox_home(self):
        self.__window_home()


    def __window_moveBy(self, deltaX, deltaY):
        """
        Moves the current window by a specified amount.
        Syntax

        window.moveBy(deltaX, deltaY) 

        Parameters

        deltaX is the amount of pixels to move the window horizontally.
        deltaY is the amount of pixels to move the window vertically.
        """
        pass

    def __window_ie60_moveBy(self, deltaX, deltaY):
        self.__window_moveBy(deltaX, deltaY)

    def __window_ie61_moveBy(self, deltaX, deltaY):
        self.__window_moveBy(deltaX, deltaY)

    def __window_ie70_moveBy(self, deltaX, deltaY):
        self.__window_moveBy(deltaX, deltaY)

    def __window_ie80_moveBy(self, deltaX, deltaY):
        self.__window_moveBy(deltaX, deltaY)

    def __window_firefox_moveBy(self, deltaX, deltaY):
        self.__window_moveBy(deltaX, deltaY)


    def __window_moveTo(self, x, y):
        """
        Moves the window to the specified coordinates.
        Syntax

        window.moveTo(x, y) 

        Parameters

        x is the horizontal coordinate to be moved to.
        y is the vertical coordinate to be moved to.
        """
        pass

    def __window_ie60_moveTo(self, x, y):
        self.__window_moveTo(x, y)

    def __window_ie61_moveTo(self, x, y):
        self.__window_moveTo(x, y)

    def __window_ie70_moveTo(self, x, y):
        self.__window_moveTo(x, y)

    def __window_ie80_moveTo(self, x, y):
        self.__window_moveTo(x, y)

    def __window_firefox_moveTo(self, x, y):
        self.__window_moveTo(x, y)


    def __window_print(self):
        """
        Prints the current document.
        Syntax

        window.print() 

        Parameters

        None.
        """
        pass

    def __window_ie60_print(self):
        self.__window_print()

    def __window_ie61_print(self):
        self.__window_print()

    def __window_ie70_print(self):
        self.__window_print()

    def __window_ie80_print(self):
        self.__window_print()

    def __window_firefox_print(self):
        self.__window_print()


    def __window_prompt(self, text):
        """
        Returns the text entered by the user in a prompt dialog. 
        """
        return True

    def __window_ie60_prompt(self, text):
        return self.__window_prompt(text)

    def __window_ie61_prompt(self, text):
        return self.__window_prompt(text)

    def __window_ie70_prompt(self, text):
        return self.__window_prompt(text)

    def __window_ie80_prompt(self, text):
        return self.__window_prompt(text)

    def __window_firefox_prompt(self, text):
        return self.__window_prompt(text)


    def __window_releaseEvents(self, eventType):
        """
        Releases the window from trapping events of a specific type.
        Syntax

        window.releaseEvents(Event.eventType) 

        Parameters

        eventType is a string
        """
        self.__window_alert(eventType)

    def __window_ie60_releaseEvents(self, eventType):
        self.__window_releaseEvents(eventType)

    def __window_ie61_releaseEvents(self, eventType):
        self.__window_releaseEvents(eventType)

    def __window_ie70_releaseEvents(self, eventType):
        self.__window_releaseEvents(eventType)

    def __window_ie80_releaseEvents(self, eventType):
        self.__window_releaseEvents(eventType)

    def __window_firefox_releaseEvents(self, eventType):
        self.__window_releaseEvents(eventType)


    def __window_resizeBy(self, xDelta, yDelta):
        """
        Resizes the current window by a certain amount.
        Syntax

        window.resizeBy(xDelta, yDelta) 

        Parameters

        xDelta is the number of pixels to grow the window horizontally.
        yDelta is the number of pixels to grow the window vertically.
        """
        pass

    def __window_ie60_resizeBy(self, xDelta, yDelta):
        self.__window_resizeBy(xDelta, yDelta)

    def __window_ie61_resizeBy(self, xDelta, yDelta):
        self.__window_resizeBy(xDelta, yDelta)

    def __window_ie70_resizeBy(self, xDelta, yDelta):
        self.__window_resizeBy(xDelta, yDelta)

    def __window_ie80_resizeBy(self, xDelta, yDelta):
        self.__window_resizeBy(xDelta, yDelta)

    def __window_firefox_resizeBy(self, xDelta, yDelta):
        self.__window_resizeBy(xDelta, yDelta)


    def __window_resizeTo(self, iWidth, iHeight):
        """
        Dynamically resizes window.
        Syntax

        window.resizeTo(iWidth, iHeight) 

        Parameters

        iWidth is an integer representing the new width in pixels.
        iHeight is an integer value representing the new height in pixels.
        """
        pass

    def __window_ie60_resizeTo(self, iWidth, iHeight):
        self.__window_resizeTo(iWidth, iHeight)

    def __window_ie61_resizeTo(self, iWidth, iHeight):
        self.__window_resizeTo(iWidth, iHeight)

    def __window_ie70_resizeTo(self, iWidth, iHeight):
        self.__window_resizeTo(iWidth, iHeight)

    def __window_ie80_resizeTo(self, iWidth, iHeight):
        self.__window_resizeTo(iWidth, iHeight)

    def __window_firefox_resizeTo(self, iWidth, iHeight):
        self.__window_resizeTo(iWidth, iHeight)


    def __window_scroll(self, x, y):
        """
        Scrolls the window to a particular place in the document.
        Syntax

        window.scroll(x-coord, y-coord) 

        Parameters

        x-coord is the pixel along the horizontal axis of the document that
        you want displayed in the upper left.
        y-coord is the pixel along the vertical axis of the document that you
        want displayed in the upper left.
        """
        pass

    def __window_ie60_scroll(self, x, y):
        self.__window_scroll(x, y)

    def __window_ie61_scroll(self, x, y):
        self.__window_scroll(x, y)

    def __window_ie70_scroll(self, x, y):
        self.__window_scroll(x, y)

    def __window_ie80_scroll(self, x, y):
        self.__window_scroll(x, y)

    def __window_firefox_scroll(self, x, y):
        self.__window_scroll(x, y)


    def __window_scrollBy(self, xDelta, yDelta):
        """
        Scrolls the document in the window by the given amount.
        Syntax

        window.scrollBy(xDelta, yDelta) 

        Parameters

        xDelta is the amount of pixels to scroll horizontally.

        yDelta is the amount of pixels to scroll vertically.
        """
        pass

    def __window_ie60_scrollBy(self, xDelta, yDelta):
        self.__window_scrollBy(xDelta, yDelta)

    def __window_ie61_scrollBy(self, xDelta, yDelta):
        self.__window_scrollBy(xDelta, yDelta)

    def __window_ie70_scrollBy(self, xDelta, yDelta):
        self.__window_scrollBy(xDelta, yDelta)

    def __window_ie80_scrollBy(self, xDelta, yDelta):
        self.__window_scrollBy(xDelta, yDelta)

    def __window_firefox_scrollBy(self, xDelta, yDelta):
        self.__window_scrollBy(xDelta, yDelta)


    def __window_scrollByLines(self, lines):
        """
        Scrolls the document by the given number of lines.
        Syntax

        window.scrollByLines(lines) 

        Parameters

        lines is the number of lines.
        """
        pass

    def __window_ie60_scrollByLines(self, lines):
        self.__window_scrollByLines(lines)

    def __window_ie61_scrollByLines(self, lines):
        self.__window_scrollByLines(lines)

    def __window_ie70_scrollByLines(self, lines):
        self.__window_scrollByLines(lines)

    def __window_ie80_scrollByLines(self, lines):
        self.__window_scrollByLines(lines)

    def __window_firefox_scrollByLines(self, lines):
        self.__window_scrollByLines(lines)


    def __window_scrollByPages(self, pages):
        """
        Scrolls the current document by the specified number of pages.
        Syntax

        window.scrollByPages(pages) 

        Parameters

        pages is the number of pages to scroll.
        """
        pass

    def __window_ie60_scrollByPages(self, pages):
        self.__window_scrollByPages(pages)

    def __window_ie61_scrollByPages(self, pages):
        self.__window_scrollByPages(pages)

    def __window_ie70_scrollByPages(self, pages):
        self.__window_scrollByPages(pages)

    def __window_ie80_scrollByPages(self, pages):
        self.__window_scrollByPages(pages)

    def __window_firefox_scrollByPages(self, pages):
        self.__window_scrollByPages(pages)


    def __window_scrollTo(self, x, y):
        """
        Scrolls to a particular set of coordinates in the document.
        Syntax

        window.scrollTo(x-coord, y-coord) 

        Parameters

        x-coord is the pixel along the horizontal axis of the document that you
        want displayed in the upper left.

        y-coord is the pixel along the vertical axis of the document that you
        want displayed in the upper left.
        """
        pass

    def __window_ie60_scrollTo(self, x, y):
        self.__window_scrollTo(x, y)

    def __window_ie61_scrollTo(self, x, y):
        self.__window_scrollTo(x, y)

    def __window_ie70_scrollTo(self, x, y):
        self.__window_scrollTo(x, y)

    def __window_ie80_scrollTo(self, x, y):
        self.__window_scrollTo(x, y)

    def __window_firefox_scrollTo(self, x, y):
        self.__window_scrollTo(x, y)


    def __window_setCursor(self, s):
        pass

    def __window_ie60_setCursor(self, s):
        self.__window_setCursor(s)

    def __window_ie61_setCursor(self, s):
        self.__window_setCursor(s)

    def __window_ie70_setCursor(self, s):
        self.__window_setCursor(s)

    def __window_ie80_setCursor(self, s):
        self.__window_setCursor(s)

    def __window_firefox_setCursor(self, s):
        self.__window_setCursor(s)


    def __window_setInterval(self, f, delay, arg1 = None, arg2 = None):
        """
        Set a delay for a specific function.
        Syntax

        ID = window.setInterval("funcName", delay)

        Parameters

        funcName is the name of the function for which you want to set a
        delay.

        delay is the number of milliseconds (thousandths of a second)
        that the function should be delayed.

        ID is the interval ID.
        """
        pass

    def __window_ie60_setInterval(self, f, delay, arg1 = None, arg2 = None):
        self.__window_ie60_setTimeout(f, delay)

    def __window_ie61_setInterval(self, f, delay, arg1 = None, arg2 = None):
        self.__window_ie61_setTimeout(f, delay)

    def __window_ie70_setInterval(self, f, delay, arg1 = None, arg2 = None):
        self.__window_ie70_setTimeout(f, delay)

    def __window_ie80_setInterval(self, f, delay, arg1 = None, arg2 = None):
        self.__window_ie80_setTimeout(f, delay)

    def __window_firefox_setInterval(self, f, delay, arg1 = None, arg2 = None):
        self.__window_firefox_setTimeout(f, delay)


    def __window_setTimeout(self, f, delay):
        """
        Sets a delay for executing a function.
        Syntax

        ID = window.setTimeout("funcName", delay) 

        Parameters

        funcName is the name of the function for which you want to set a
        delay.

        delay is the number of milliseconds (thousandths of a second)
        that the function should be delayed.

        ID is the interval ID.
        """
        self.__dict__['__timeout'].append(f)

    def __window_ie60_setTimeout(self, f, delay):
        self.__window_setTimeout(f, delay)

    def __window_ie61_setTimeout(self, f, delay):
        self.__window_setTimeout(f, delay)

    def __window_ie70_setTimeout(self, f, delay):
        self.__window_setTimeout(f, delay)

    def __window_ie80_setTimeout(self, f, delay):
        self.__window_setTimeout(f, delay)

    def __window_firefox_setTimeout(self, f, delay):
        self.__window_setTimeout(f, delay)


    def __window_stop(self):
        """
        This method stops window loading.
        Syntax

        window.stop() 

        Parameters

        None.
        """
        pass

    def __window_ie60_stop(self):
        self.__window_stop()

    def __window_ie61_stop(self):
        self.__window_stop()

    def __window_ie70_stop(self):
        self.__window_stop()

    def __window_ie80_stop(self):
        self.__window_stop()

    def __window_firefox_stop(self):
        self.__window_stop()


    def __window_attachEvent(self, sEvent, fpNotify):
        if dataetc.isevent(sEvent, 'window'):
            self.__dict__[sEvent] = fpNotify

    def __window_ie60_attachEvent(self, sEvent, fpNotify):
        self.__window_attachEvent(sEvent, fpNotify)

    def __window_ie61_attachEvent(self, sEvent, fpNotify):
        self.__window_attachEvent(sEvent, fpNotify)

    def __window_ie70_attachEvent(self, sEvent, fpNotify):
        self.__window_attachEvent(sEvent, fpNotify)

    def __window_ie80_attachEvent(self, sEvent, fpNotify):
        self.__window_attachEvent(sEvent, fpNotify)


    def __window_detachEvent(self, sEvent, fpNotify):
        if sEvent in self.__dict__ and self.__dict__[sEvent] == fpNotify:
            del self.__dict__[sEvent]

    def __window_ie60_detachEvent(self, sEvent, fpNotify):
        self.__window_detachEvent(sEvent, fpNotify)

    def __window_ie61_detachEvent(self, sEvent, fpNotify):
        self.__window_detachEvent(sEvent, fpNotify)

    def __window_ie70_detachEvent(self, sEvent, fpNotify):
        self.__window_detachEvent(sEvent, fpNotify)

    def __window_ie80_detachEvent(self, sEvent, fpNotify):
        self.__window_detachEvent(sEvent, fpNotify)


    def __window_addEventListener(self, type, listener, useCapture = False):
        if dataetc.isevent(type, 'window'):
            self.__dict__[type] = listener

    def __window_firefox_addEventListener(self, type, listener, useCapture = False):
        self.__window_addEventListener(type, listener, useCapture = False)


    def __window_removeEventListener(self, type, listener, useCapture = False):
        if type in self.__dict__ and self.__dict__[type] == listener:
            del self.__dict__[type]

    def __window_firefox_removeEventListener(self, type, listener, useCapture = False):
        self.__window_removeEventListener(type, listener, useCapture = False)


    def __window_eval(self, script):
        config.VERBOSE(config.VERBOSE_DEBUG, "[DEBUG] Got eval, evaling...")
        config.VERBOSE(config.VERBOSE_DETAIL, str(script))

        if not type(script) in types.StringTypes:
            return script

        try:
            ret = self.__dict__['__cx'].execute(self.__dict__['__cx'].patch_script(script))
            return ret
        except:
            traceback.print_exc()
            if script:
                self.__dict__['__lastscript'] = script

    def __window_ie60_eval(self, script):
        return self.__window_eval(script)

    def __window_ie61_eval(self, script):
        return self.__window_eval(script)

    def __window_ie70_eval(self, script):
        return self.__window_eval(script)

    def __window_ie80_eval(self, script):
        return self.__window_eval(script)

    def __window_firefox_eval(self, script):
        return self.__window_eval(script)

