# SVG Grid 

This library renders a grid in SVG. This might be helpful if you want to share or build blueprints for hardware in the browser.

The SVG library does not use an advanced library for DOM manipulation, but rather the native DOM API such as document.createElementNS (see https://developer.mozilla.org/en-US/docs/Web/API/document.createElementNS )

## Demo

You can either run:

a) bundle.js: Use this generate the grid from a script
b) bundle-require.js: Use this to generate the grid interactively from the Node shell

For this demo, load bundle-require.js and run in the browser console:

    > Grid = require('grid');
    > s = document.getElementsByTagName('svg');
    > g = new Grid(s[0]);
    > g.render()


# License

MIT, 2014 (c) Patrick Mulder
