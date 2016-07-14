FAVS=../../favicon.ico
all: $(FAVS)

../../favicon.ico: favicon.svg
	inkscape --export-area-page --export-width 16 --export-background-opacity=0 favicon.svg --export-png tmp-16.png
	inkscape --export-area-page --export-width 32 --export-background-opacity=0 favicon.svg --export-png tmp-32.png
	inkscape --export-area-page --export-width 64 --export-background-opacity=0 favicon.svg --export-png tmp-64.png
	convert tmp-16.png tmp-32.png tmp-64.png favicon.ico
	rm tmp-*.png
	mv favicon.ico ../../favicon.ico

clean:
	rm -f $(FAVS)
