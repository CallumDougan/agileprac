var _ = require('lodash');

var Person = function(name, email, password, avatar){
  this.name = name;
  this.email = email;
  this.password = password;
  this.avatar = avatar;



}

Person.prototype = {

rollDice: function(){
  return _.random(1, 6);
},

}

var person = new Person('barry', 'barry@barry.com', 'password', 'avatar.com/avatar.png');


module.export = person;
console.log(person.rollDice())