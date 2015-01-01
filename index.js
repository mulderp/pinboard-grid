var createNode = require('svg-node');
var _ = require('underscore');

var maxX = 100;
var maxY = 100;

// constructor function set options
// for the grid
var Grid = function(svg, options) {

  if (!options) {
    options = {};
  }

  this.svg = svg;
  this.weight = options.weight ? options.weight : 2;
  this.color = options.color ? options.color : 'black';
  this.spacing = options.spacing ? options.spacing : 10;

  // when calling render from a callback, use this context
  _.bindAll(this, '_renderSquare');

}

// render squares onto group
Grid.prototype._renderSquare = function(group, x, y) {

  var square = createNode('rect');
  square.setAttribute('x', x);
  square.setAttribute('y', y);
  square.setAttribute('width', this.spacing);
  square.setAttribute('height', this.spacing);
  square.setAttribute('stroke', this.color);
  square.setAttribute('stroke-width', this.weight);
  square.setAttribute('fill', 'white');

  // for future dashing of the line
  // line.setAttribute('stroke-dasharray':'1, 3');
  // line.setAttribute('stroke-linecap':'round');

  group.appendChild(square);
}


// main render function
Grid.prototype.render = function() {

  var group = createNode('g');
  group.setAttribute('class', 'grid');

  var that = this;
  for (var row=0; row<maxY; row++) {
    for (var column=0; column<maxX; column++) {
      that._renderSquare(group, row * that.spacing, column * that.spacing);
    }
  }

  this.svg.appendChild(group);

}


module.exports = Grid; 
