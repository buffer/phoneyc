
def unarg(filen):
	fin = open(filen,'r')
	i = 0
	arg = ""
	for line in fin:
		head,function,args = line.partition("unescape(")
		print args
		if args:
			arg += args
		if arg:
			fout = open(filen+"unescape-arg","w")
			fout.write(arg)
			fout.close()	
	
for filename in open("feedscript.txt",'r'):
	print "unarg called"
        unarg(filename.strip())
