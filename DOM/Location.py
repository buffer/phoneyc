
import urlparse

class Location(object):
    def __init__(self, document, url):
        self.__dict__['__document'] = document
        self.__dict__['href']       = url

    def toString(self):
        return self.href

    def __setattr__(self, name, val):
        if name == 'href':
            from Window import Window
            self.__dict__['href'] = self.fix_url(val)
            root = self.__dict__['__document'].contentWindow.__dict__['__root']
            #TODO: Add referrer?
            Window(root, self.__dict__['href'])

    def __getattr__(self, name):
        url_parts = self.__dict__['href'].split('/')
        if name == 'protocol': 
            return url_parts[0]
        if name == 'host': 
            return url_parts[2]
        if name == 'hostname': 
            return url_parts[2].split(':')[0].replace('[','').replace(']','')
        if name == 'port': 
            return ':'.join(url_parts[2].split(':')[1:])
        if name == 'pathname': 
            return '/'+url_parts[3].split('?')[0]
        if name == 'search': 
            return '?'.join(url_parts[3].split('?')[1:])
        return None

    def replace(self, url):
        from Window import Window
        from PageParser import PageParser

        #TODO: Add referrer
        window = Window(self.__dict__['__document'].contentWindow.__dict__['__root'],
                        self.fix_url(url))
        parser = PageParser(window, window.document, window.__dict__['__html'])
        parser.close()
        return url

    def reload(self):
        self.replace(self.__dict__['href'])

    def fix_url(self, url):
        base = self.__dict__['__document'].URL
        base_scheme, base_netloc, base_path, base_query, base_fragment = urlparse.urlsplit(base)
        
        # fix up relative URLs to absolute URLs
        scheme, netloc, path, query, fragment = urlparse.urlsplit(url)
        if scheme not in ('http', 'https'):
            if url.startswith('/'): 
                url = '%s://%s%s'   % (base_scheme, base_netloc, url)
            elif url.startswith('?'): 
                url = '%s://%s%s%s' % (base_scheme, base_netloc, base_path, url)
            elif url.startswith('#'):
                url = '%s://%s%s%s' % (base_scheme, base_netloc, base_path, url)
            else:
                _url = "%s://%s"    % (base_scheme, base_netloc, )
                if base_path:
                    _url += '/'.join(base_path.split('/')[:-1])
                url = _url + '/' + url
        
        return url
    # note that when location changes, a new document will be loaded. More will be 
    # taken into consider and no time yet.


