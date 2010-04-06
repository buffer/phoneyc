from DOMObject import DOMObject

class DynamicDOMObject(DOMObject):
    def __init__(self):
        self.__dict__.update(self.inits)
        DOMObject.__init__(self, self.window, self.tagName, self.parser)

def DOMObjectFactory(name, initializers):
    return type(name, (DynamicDOMObject,), {'inits' : initializers})

