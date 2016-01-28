var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
require('lodash');


var person = require('./person');

describe('person', function(){
  it('should roll a d6', function(){
    expect(person.rollDice).to.be.within(1,6)
  })
})