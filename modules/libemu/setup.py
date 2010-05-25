#!/usr/bin/env python
from distutils.core import setup
from distutils.extension import Extension
import commands

def pkgconfig(*packages, **kw):
    flag_map = {'-I': 'include_dirs', '-L': 'library_dirs', '-l': 'libraries'}
    for token in commands.getoutput("pkg-config --libs --cflags %s" % ' '.join(packages)).split():
        kw.setdefault(flag_map.get(token[:2]), []).append(token[2:])
    return kw

setup(
    name = 'libemu',
    version = '@VERSION@',
    description = 'Python interface to the libemu x86 emulator',
    author = 'Z. Chen, Georg Wicherski',
    author_email = 'czj.pub@gmail.com, gw@mwcollect.org',
    url = 'http://code.google.com/p/phoneyc/, http://libemu.mwcollect.org/',
    ext_modules=[
        Extension("libemu", ["libemu_module.c"],**pkgconfig('libemu')),
    ],
)
