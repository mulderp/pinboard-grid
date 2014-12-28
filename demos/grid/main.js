var Grid = require('../../');
var createNode = require('svg-node');

console.log('loaded');

document.addEventListener('DOMContentLoaded', function () {

  var svg = document.getElementsByTagName('svg')[0];

  var grid = new Grid(svg, {weight: 1, color: '#cccccc', spacing: 20});
  grid.render();
  
  var rect = createNode('rect');
  rect.setAttribute('x', 0)
  rect.setAttribute('y', 0)
  rect.setAttribute('width', 20)
  rect.setAttribute('height', 20)
  rect.setAttribute('fill', '#f00')
  
  svg.appendChild(rect);
  
});
