var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var _ = require('lodash');


var person = require('./person');
var board = require('./board');

describe('person', function(){
  it('should roll a d6', function(){
    expect(person.rollDice()).to.be.within(1,6);
  });

  it('should be able to join games', function (){
    person.joinGame(2);
    expect(2).to.equal(person.currentGame);
  });
});

describe('board', function(){
  it('should generate 1000-square board', function(){
  expect(testBoard.squares.length).to.equal(1000);
  });
});

