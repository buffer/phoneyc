import time
import config
from Array import Array
from Location import Location
from DOMObject import DOMObject
from PageParser import PageParser

class Document(DOMObject):
    """
        Class Document

        Class used to emulate DOM Document object.

        Parameters

        attributes      returns an array of attributes on the given element.
        alinkColor      returns or sets the color of active links in the document body.
        anchors         returns a list of all of the anchors in the document.
        applets         returns an ordered list of the applets within a document.
        bgColor         gets/sets the background color of the current document.
        body            returns the BODY node of the current document.
        characterSet    returns the character set being used by the document.
        childNodes      returns an array of child nodes on the given element node.
        cookie          returns a semicolon-separated list of the cookies for that document or sets a single cookie.
        contentWindow   returns the window object for the containing window.
        doctype         returns the Document Type Definition (DTD) of the current document.
        documentElement returns the Element that is a direct child of document, which in most cases is the HTML element.
        domain          returns the domain of the current document.
        embeds          returns a list of the embedded OBJECTS within the current document.
        fgColor         gets/sets the foreground color, or text color, of the current document.
        firstChild      returns the first node in the list of direct children of the document.
        forms           returns a list of the FORM elements within the current document.
        height          gets/sets the height of the current document.
        images          returns a list of the images in the current document.
        implementation  returns the DOM implementation associated with the current document.
        lastModified    returns the date on which the document was last modified.
        linkColor       gets/sets the color of hyperlinks in the document.
        links           returns an array of all the hyperlinks in the document.
        location        returns the URI of the current document.
        namespaceURI    returns the XML namespace of the current document.
        nextSibling     returns the node immediately following the current one in the tree.
        nodeName        returns the name of the current node as a string.
        nodeType        returns the node type of the current document.
        nodeValue       returns the value of particular types of nodes.
        ownerDocument   returns an object reference to the document that owns the current element.
        parentNode      returns an object reference to the parent node.
        plugins         returns an array of the available plugins.
        previousSibling returns the node immediately previous to the current one in the tree.
        referrer        returns the URI of the page that linked to this page.
        styleSheets     returns a list of the stylesheet objects on the current document.
        URL             returns a string containing the URL of the current document.
        vlinkColor      gets/sets the color of visited hyperlinks.
        width           returns the width of the current document. 
    """
    def __init__(self, window):
        self.tagName              = 'document'
        self.cookie               = ''
        self.referrer             = ''
        self.location             = window.__dict__['__url']
        #self.implementation = unknown() # in order to skip browser detection. null and undefined in js both considered None in python, cause trouble
        self.children             = []
        self.childNodes           = Array()
        self.activeElement        = None
        self.contentWindow        = window
        self.URL                  = window.__dict__['__url']
        self.__dict__['all']      = []
        self.__dict__['__dynamic'] = []
        self.__init_document(window.__dict__['__headers'])

    def __init_lastmodified(self, header):
        p = header.split("Last-Modified:")[1].strip()
        try:
            t = time.strptime(p, "%a, %d %b %Y %H:%M:%S GMT")
        except ValueError:
            try:
                t = time.strptime(p, "%a, %d %b %Y %H:%M:%SGMT")
            except ValueError:
                config.VERBOSE(config.VERBOSE_WARNING, 
                               '[WARNING] Error while parsing lastModified [Document.py]')
                self.lastModified = ''
                return 

        fmt = "%.2d/%.2d/%.4d %.2d:%.2d:%.2d"
        self.lastModified = fmt % (t.tm_mon, t.tm_mday, t.tm_year, t.tm_hour, t.tm_min, t.tm_sec)

    def __init_cookie(self, header):
        p = header.split("Set-Cookie:")[1].strip()
        if self.cookie:
            self.cookie += ";"
        self.cookie += p

    def __init_location(self, header):
        p = header.split("Location:")[1].strip()
        self.location = p
        if not self.referrer:
            self.referrer = self.location.href

    def __init_document(self, headers):
        if self.contentWindow.__dict__['__referrer'] and '__url' in self.contentWindow.__dict__['__referrer'].__dict__:
            self.referrer = self.contentWindow.__dict__['__referrer'].__dict__['__url']

        for header in headers:
            if header.startswith("Last-Modified"):
                self.__init_lastmodified(header)

            if header.startswith("Set-Cookie"):
                self.__init_cookie(header)

            if header.startswith("Location"):
                self.__init_location(header)

    def __setattr__(self, name, val):
        if name == 'location':
            self.__dict__['location'] = Location(self, val)
            return

        if name == 'all': 
            return

        self.__dict__[name] = val

    
    # Document object methods
    # 
    # clear                     Clears a document.
    # close                     Closes a document stream for writing.
    # createAttribute           Create a new attribute on the current element.
    # createDocumentFragment    Creates a new document fragment.
    # createElement             Creates a new element.
    # createTextNode            Creates a text node.
    # focus                     Sets focus on the current element.
    # getElementById            Returns an object reference to the identified element.
    # getElementsByName         Returns a list of elements with the given name.
    # getElementsByTagName      Returns a list of elements with the given tag name.
    # open                      Opens a document stream for writing.
    # write                     Writes text to a document.
    # writeln                   Write a line of text to a document.

    def clear(self):
        """
        The clear method clears the current document of all its content.
        Syntax

        document.clear() 

        Parameters

        None.
        """
        pass

    def close(self):
        """
        The document.close() method finishes writing to the open document.
        Syntax

        document.close() 

        Parameters

        None.
        """
        pass

    def createElement(self, type):
        """
        Creates an element of the type specified. Note that the instance returned implements 
        the Element interface, so attributes can be specified directly on the returned object.
        
        Syntax

        element = element.createElement(type) 

        Parameters

        element is an object.

        type is a string that represents the type of element to be created.
        """
        DOMObject(self.contentWindow, type, None)
        return self.all[-1]
   
    def focus(self):
        """
        focus sets focus on the current document.
        Syntax

        document.focus() 

        Parameters

        None.
        """
        pass

    def getElementById(self, id):
        """
        Returns the element whose ID is specified.
        Syntax

        element = document.getElementById(id); 

        Parameters

        element is an object.

        id is a string representing the unique id of the element being sought.
        """
        for p in self.all:
            if p.id == id:
                return p

    def getElementsByName(self, name):
        """
        Returns a list of elements of a given name in the document.
        Syntax

        elements = document.getElementsByName(name) 

        Parameters

        elements is a nodeList of elements.

        name is a string representing the value of the name attribute on the
        element.
        """
        self.tempArray = []
        for p in self.all:
            if p.name == name: 
                self.tempArray.append(p)
        return self.tempArray

    def getElementsByTagName(self, name):
        """
        Returns a list of elements of a given name in the document.
        Syntax

        elements = document.getElementsByTagName(Name) 

        Parameters

        elements is a nodeList of elements.

        tagName is a string representing the name of the elements.
        """
        self.tempArray = []
        for p in self.all:
            if p.tagName == name: 
                self.tempArray.append(p)
        return self.tempArray

    def write(self, text):
        """
        Writes a string of text to a document stream.
        Syntax

        document.write(text) 

        Parameters

        text is a string containing the text to be written to the current
        document.
        """
        config.VERBOSE(config.VERBOSE_DEBUG, '[DEBUG] in Document.py Document.write(ln)...')
        config.VERBOSE(config.VERBOSE_DETAIL, str(text))

        self.__dict__['__dynamic'].append(text) 
        content = ''.join(self.__dict__['__dynamic'])
        p = PageParser(self.contentWindow,
                       self.contentWindow.__dict__['__sl'][-1], 
                       content,
                       True)

    def writeln(self, line):
        """
        Writes a string of text followed by a newline character to a document.
        Syntax

        document.writeln(line) 

        Parameters

        line is string containing a line of text.
        """
        self.write(line + "\n")


