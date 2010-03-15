Requirements:
=============

    libemu-svn
    http://libemu.carnivore.it/
    
    curl
    http://curl.haxx.se/


Compile the modules:
====================

(Optional) 
If you need to compile the modules with a specific Python version you can 
do it through the PHONEYC_PYTHON environment variable i.e. simply exporting 
the variable this way before moving on 

    $ export PHONEYC_PYTHON=python2.5

will force the build system to use python2.5 instead of the default 
one. Otherwise skip this step.

(Required)
    $ cd modules
    $ make
    $ make install

NOTE: Don't need to have root privilege when running make install.

Run it:
=======

   $ python phoneyc.py URL-you-what-to-examine

