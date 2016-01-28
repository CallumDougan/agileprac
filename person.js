var _ = require('lodash');

var Person = function(name, email, password, avatar){
  this.name = name;
  this.email = email;
  this.password = password;
  this.avatar = avatar;
  this.currentGame = null;
};

Person.prototype = {
  rollDice: function(){
    return _.random(1, 6);
  },
  joinGame: function(id){
    this.currentGame = id;
  },
}

var person = new Person('barry', 'barry@barry.com', 'password', 'avatar.com/avatar.png');

module.exports = person;
console.log(person.rollDice());