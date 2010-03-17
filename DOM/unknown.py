import config

class unknown(object):
    # this class is used to simulate the member of DOM 
    # object (especially 'document') which we haven't 
    # implemented. it's both unnecessary and hard to 
    # simulate all member of every DOM object.
    def __init__(self, *arg):
        pass

    def __getattr__(self, name):
        return unknown()

    def __getitem__(self, key):
        return unknown()

    def __call__(self, *arg):
        return unknown()

    def __setattr__(self, name, val):
        if config.verboselevel >= config.VERBOSE_DEBUG:
            print "[DEBUG] in unknown.py: Attr %s set to: %s" % (name, val, )

    def __setitem__(self, key, val): 
        pass

    def __noSuchMethod__(self, name, *arg): 
        pass

