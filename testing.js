var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var _ = require('lodash');


var person = require('./person');

describe('person', function(){
  it('should roll a d6', function(){
    expect(person.rollDice()).to.be.within(1,6)
  });

  it('should be able to join games', function (){
    person.joinGame(2);
    expect(2).to.equal(person.currentGame)
  })
})