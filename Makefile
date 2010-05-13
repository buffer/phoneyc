debian:python-debian pkgconfig-debian nspr-debian ldconfig-debian xulrunner-debian libemu phoneyc_modules
ubuntu:python-debian pkgconfig-debian nspr-debian ldconfig-debian xulrunner-debian libemu phoneyc_modules
gentoo:pkgconfig-gentoo nspr-gentoo xulrunner-gentoo ldconfig-gentoo libemu phoneyc_modules
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

ldconfig-debian:
	echo "/opt/libemu/lib/libemu" > /etc/ld.so.conf.d/libemu.conf

ldconfig-gentoo:
	echo "/opt/libemu/lib/libemu" > /etc/ld.so.conf.d/libemu.conf

libemu:
	ldconfig;							      \
	git clone git://git.carnivore.it/libemu.git /opt/libemu;	      \
	cd /opt/libemu;                                                       \
	autoreconf -v -i && ./configure --prefix=/opt/libemu && make install; \
	cd -;

phoneyc_modules:
	cd modules; \
	make && make install; \
	cd -;
