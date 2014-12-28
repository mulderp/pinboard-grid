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
  _.bindAll(this, '_renderHorizontal', '_renderVertical');

}

// horizontal rendering uses fixed X positions 
Grid.prototype._renderHorizontal = function(pos) {

  var line = createNode('line');
  line.setAttribute('x1', 0);
  line.setAttribute('y1', this.spacing*pos);
  line.setAttribute('x2', 1000);
  line.setAttribute('y2', this.spacing*pos);
  line.setAttribute('stroke', this.color);
  line.setAttribute('stroke-width', this.weight);

  // for future dashing of the line
  // line.setAttribute('stroke-dasharray':'1, 3');
  // line.setAttribute('stroke-linecap':'round');

  this.svg.appendChild(line);
}


// vertical rendering uses fixed Y positions
Grid.prototype._renderVertical = function(pos) {
  var line = createNode('line');
  line.setAttribute('x1', this.spacing*pos);
  line.setAttribute('y1', 0);
  line.setAttribute('x2', this.spacing*pos);
  line.setAttribute('y2', 1000);
  line.setAttribute('stroke', this.color);
  line.setAttribute('stroke-width', this.weight);

  this.svg.appendChild(line);
}

// main render function
Grid.prototype.render = function() {

  _.times(maxY, this._renderHorizontal);
  _.times(maxX, this._renderVertical);

}


module.exports = Grid; 
