.PHONY: bundle.js bundle-grid.js

bundle.js:
	browserify main.js > bundle.js

bundle-grid.js:
	browserify -r ../../index.js:grid > bundle-grid.js
