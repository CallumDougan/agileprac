var randomExt = require('random-ext');
var Board = require('./board').board;
var Person = require('./board');
var Square = require('./board').square;


var Game = function(){
  this.players = [];
  this.avatar = [1,2,3,4];
  
}

Game.prototype = {
newGame: function(){
var newBoard = new Board();
newBoard.generateSquares();
this.board = newBoard;

}


}


var Pipe = function(start,end){
  this.start = start; 
  this.end = end;
}


Pipe.prototype = {
   isSnake: function(){
   var value = randomExt.boolean();
    this.snake = value;
  }


}

module.exports = Game;

testPipe = new Pipe(34,66)
testPipe.isSnake();
console.log(testPipe);

testGame = new Game();
testGame.newGame();
console.log(testGame);
console.log(testGame.board.squares)
