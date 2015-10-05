var gridDim = 91;
var antX = antY = Math.round(gridDim/2);
var numberOfSquares = gridDim * gridDim;
console.log(antX,antY);

var antPosition = function(antXpos, antYpos) {
  var fillSquare = (gridDim * antYpos - 1) + antXpos;
  return fillSquare;
  console.log(fillSquare);
}

$(document).ready(function() {
  
  //Create the container
  $('.container').css({ width : gridDim * 10 + 2 + "px" });
  
  //Fill the container with squares
  for (i=0;i<numberOfSquares;i++) {
    $('<div class="square"></div>').appendTo('.container');
  }
  
  //Place the ant
  $('.square:nth-child(' + antPosition(antX, antY) + ')').addClass('ant');
});
