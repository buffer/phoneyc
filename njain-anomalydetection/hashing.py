import hashlib
fin = open("testfeed.txt")
a = "file:///home/neha/phoneyc/"
for line in fin:
    line = line.strip()
    input = a + line
    hashis=hashlib.md5(line).hexdigest()
    print input,hashis
fin.close()

