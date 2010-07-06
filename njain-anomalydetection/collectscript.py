#!/usr/bin/python
import re
def extractjs(feedfile):
    for filename in open(feedfile,'r'):
    	i = 0
    	lin = 0
	filename = filename.strip()
    	outfile = filename+".js"
	jscollect = open("feedjs.txt",'a')	#to write the collection of javascript filenames to a feed file
	jscollect.write(outfile+'\n')
   	jsout = open(outfile,'w')		#to write the javascript into a .js file as extracted from phoneyc
    	for line in open(filename,'r'):
        	if i == 0:
            		firstline = line
        	try:
            		jsout.write(line)
       		except IOError:
			pass
        	i += 1
     	        l = re.search("^;;$",line)
                if l:
            		lin = 1
        	if lin == 1:
            		jsout.close()
            		break
    jscollect.close()
    feedextractor("feedjs.txt")

def feedextractor(filename):
	for fn in open(filename,'r'):
		extractfeature(fn)

def extractfeature(outfile):
    outfile = outfile.strip()
    fin = open(outfile,'r')
    flen = len(fin.read())
    featureout = open("feature.txt",'a')
    #featureout.write(outfile)   
    print "file len: ", flen
    ndocwrite, comle, total_white, len_unescape_arg, count_unescape = 0, 0, 0, 0, 0
    fin.close()
    arg = ""
    for line in open(outfile,'r'):
        if re.search("//",line) and not re.search("\"?\(?//*\"?\)?",line):				#to find comment in JS script
            print line,"comment found"
            comle += len(line)
	    print "comle: ",comle								#find a way to chop only the comment part from any string?
            
        if line.find("document.write") > 0:
	    print "found document.write"							#simple sring search for document.write call.
            ndocwrite += 1									#no check for the hidden iframe creation
	    print "no. of doc.write: ", ndocwrite

	w = re.findall("\s",line)		#to find white space.
	if w:
	    #print "no. of white in line: ",len(w)
	    total_white += len(w)

	head,function,args = line.partition("unescape(")
        if args:
		count_unescape += 1
		len_unescape_arg += len(args)
		print len_unescape_arg
    print "total_white: ", total_white
    per_white = (float(total_white)/flen)*100
    print "% of white space: ", per_white
    if count_unescape > 0:
        avg_unescape_arg = float(len_unescape_arg)/count_unescape
    else:
        avg_unescape_arg = 0.0
    featureout.write("unescape_calls="+str(count_unescape)+",avg_unescape_arg_len="+str(avg_unescape_arg)+ ",docwrite="+str(ndocwrite)+",white="+str(per_white)+"\n")
    #featureout.write(feature_vector)

if __name__ =='__main__':
    extractjs("feedscript.txt")
