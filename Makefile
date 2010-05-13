
debian:python-debian pkgconfig-debian nspr-debian xulrunner-debian libemu phoneyc_modules
ubuntu:python-debian pkgconfig-debian nspr-debian xulrunner-debian libemu phoneyc_modules
gentoo:pkgconfig-gentoo nspr-gentoo xulrunner-gentoo libemu phoneyc_modules
osx:pkgconfig-osx nspr-osx xulrunner-osx libemu phoneyc_modules

python-debian:
	apt-get install python-dev

pkgconfig-debian:
	apt-get install pkg-config

nspr-debian:
	apt-get install libnspr4-dev

xulrunner-debian:
	apt-get install xulrunner-dev

pkgconfig-gentoo:
	emerge -u dev-util/pkgconfig

nspr-gentoo:
	emerge -u dev-libs/nspr

xulrunner-gentoo:
	emerge -u net-libs/xulrunner

pkgconfig-osx:
	port install pkgconfig

nspr-osx:
	port install nspr

xulrunner-osx:
	port install xulrunner

libemu:
	git clone git://git.carnivore.it/libemu.git /tmp/libemu-svn;	      \
	cd /tmp/libemu-svn;                                                   \
	autoreconf -v -i && ./configure --prefix=/opt/libemu && make install; \
	rm -rf /tmp/libemu-svn;						      \
	cd -;

phoneyc_modules:
	cd modules; \
	make && make install; \
	cd -;
