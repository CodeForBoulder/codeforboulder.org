FAVS=../../favicon.ico \
    apple-touch-icon-57x57.png \
    apple-touch-icon-60x60.png \
    apple-touch-icon-72x72.png \
    apple-touch-icon-76x76.png \
    apple-touch-icon-114x114.png \
    apple-touch-icon-120x120.png \
    apple-touch-icon-144x144.png \
    apple-touch-icon-152x152.png \
    apple-touch-icon-180x180.png \
    favicon-32x32.png \
    android-chrome-192x192.png \
    favicon-96x96.png \
    favicon-16x16.png \
    mstile-144x144.png

all: $(FAVS)

../../favicon.ico: favicon.svg
	inkscape --export-area-page --export-width 16 --export-background-opacity=0 favicon.svg --export-png tmp-16.png
	inkscape --export-area-page --export-width 32 --export-background-opacity=0 favicon.svg --export-png tmp-32.png
	inkscape --export-area-page --export-width 64 --export-background-opacity=0 favicon.svg --export-png tmp-64.png
	convert tmp-16.png tmp-32.png tmp-64.png favicon.ico
	rm tmp-*.png
	mv favicon.ico ../../favicon.ico

%.png: favicon.svg
	inkscape --export-area-page --export-width 57 --export-background-opacity=0 favicon.svg --export-png $@


clean:
	rm -f $(FAVS)
