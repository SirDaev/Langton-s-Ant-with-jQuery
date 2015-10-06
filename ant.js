var gridDim = 100;
var gridHalf =  Math.round(gridDim/2) 
var antPos = 1760;
//var antPos = gridDim * gridHalf - gridDim + gridHalf;
var numberOfSquares = gridDim * gridDim;
var antDir = 'r';
var isRunning = false;

//Toggle square fill
var toggleSquare = function(square) {
  $('.antField .square:nth-child(' + (square) + ')').toggleClass('filled');
}

//Toggle ant fill
var toggleAnt = function(square) {
  $('.antField .square:nth-child(' + (square) + ')').toggleClass('ant');
}

//Check to see if a square is filled
var isFilled = function(square) {
  return $('.antField .square:nth-child(' + (square) + ')').hasClass('filled');
}

//Move the ant and (un)fill as necessary
var move = function() {

  toggleAnt(antPos);

  if (antDir === 'r') {

    if(isFilled(antPos + 1)) {
      antDir = 'u';
    } else {
      antDir = 'd';
    }

    toggleAnt(antPos + 1);
    toggleSquare(antPos + 1);

    antPos += 1;

  } else if(antDir === 'l') {

    if(isFilled(antPos - 1)) {
      antDir = 'd';
    } else {
      antDir = 'u';
    }

    toggleAnt(antPos - 1);
    toggleSquare(antPos - 1);

    antPos -= 1;

  } else if(antDir === 'u') {

    if(isFilled(antPos - gridDim)) {
      antDir = 'l';
    } else {
      antDir = 'r';
    }

    toggleAnt(antPos - gridDim);
    toggleSquare(antPos - gridDim);

    antPos -= gridDim;

  } else {

    if(isFilled(antPos + gridDim)) {
      antDir = 'r';
    } else {
      antDir = 'l';
    }

    toggleAnt(antPos + gridDim);
    toggleSquare(antPos + gridDim);

    antPos += gridDim;

  }

}

$(document).ready(function() {
  
  //Create the container
  $('.antField').css({ width : gridDim * 8 + 2 + "px" });
  
  //Fill the container with squares
  for (i=0;i<numberOfSquares;i++) {
    $('<div class="square"></div>').appendTo('.antField');
  }
  
  //Fill the initial squares
  toggleSquare(antPos); //Initial ant square
  toggleSquare(antPos + 1); //Square to the right
  toggleSquare(antPos - 1); //Square to the left
  toggleSquare(antPos + gridDim); //Square below
  toggleSquare(antPos - gridDim); //Square above
  
  //Place the ant
  toggleAnt(antPos);
  
  $('.button').click(function() {
    
    if(!isRunning) {
      
      isRunning = true;
      
      for(i=1;i<4000;i++) {
        setTimeout(move, 30*i);
      };
      
    }
    
  });
  
});