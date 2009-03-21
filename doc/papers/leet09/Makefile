all: phoneyc.pdf

phoneyc.pdf: phoneyc.tex phoneyc.bib pics/example_walk.png   pics/phoneyc_flow.png
	latex phoneyc.tex 
	bibtex phoneyc
	latex phoneyc.tex 
	latex phoneyc.tex 

clean:
	rm phoneyc.log phoneyc.aux phoneyc.bbl phoneyc.blg phoneyc.pdf