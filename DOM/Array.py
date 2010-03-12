
class Array(object):
    def __init__(self, length=0):
        assert length >= 0
        self.length = length

    def __getitem__(self, key):
        if key in self.__dict__: 
            return self.__dict__[key]
        return None

    def __setitem__(self, key, value):
        self.__dict__[key] = value
        if isinstance(key, int) and key >= self.length: 
            self.length = key + 1

    def append(self, obj):
        self[self.length] = obj

    def remove(self, obj):
        for key in self.__dict__:
            if self.__dict__[key] == obj:
                del self.__dict__[key]
                if isinstance(key, int) and key >= 0:
                    for k in self.__dict__:
                        if isinstance(k, int) and k > key:
                            self.__dict__[k - 1] = self.__dict__[k]
                            del self.__dict__[k]
                    length -= 1
                break

    def push(self, obj):
        self.append(obj)

