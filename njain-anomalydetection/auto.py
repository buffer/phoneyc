
command = "python phoneyc.py -d 10 "
a = "file:///home/neha/phoneyc/"
i = 0
try:
    fin = open("testfeed.txt")
    fout = open("atp",'wb')
    for line in fin:
        i += 1
        input = a + line

	final = command+input
        fout.write(final+'\n')
    fout.close()
    fin.close()
except IOError:
    pass
    
