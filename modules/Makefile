
SUBDIRS=hcalert honeyjs libemu
INSTHOME=../..

all:compile

compile:
	@for i in $(SUBDIRS); do \
	echo "make all in $$i..."; \
	(cd $$i; python setup.py build); done

install:
	@for i in $(SUBDIRS); do \
	echo "install all in $$i..."; \
	(cd $$i; PYTHONPATH=../../lib/python python setup.py install --home=$(INSTHOME)); done

clean:
	@for i in $(SUBDIRS); do \
	echo "install all in $$i..."; \
	(cd $$i; python setup.py clean); done

