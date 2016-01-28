var randomExt = require('random-ext');

var Board = function(){

}

Board.prototype = {
  generateSquares: function(){
    var allSquares = [];
    var gSquare = 0;
    for(i=0; i <1000; i++){
      gSquare = new Square(i);
      allSquares.push(gSquare);
    }
    this.squares = allSquares;
  }


}


var Square = function(num){
  this.number = num;
  this.contents = [];

}


Square.prototype = {
}

testBoard = new Board();
testBoard.generateSquares();
console.log(testBoard.squares.length);

module.exports = testBoard