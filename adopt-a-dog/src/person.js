var Dog = require("./dog.js");

class Person {
  constructor(name, dogInfo) {
    this.name = name
    this.dog = dogInfo
  }

  fillFoodBowl() {
    this.dog.eat()
    //  or could have written this.dog.hungry = false
  }

  throwBall() {
    this.dog.fetchBall()
    return `${this.dog.name} loves playing fetch!`
  }

  introduceNewFriends(dogInfo) {
    this.dog.makeNewFriend(dogInfo)
  }

  adoptAPup(dogName, dogAge) {
    if (this.dog) {
      return `You can\'t adopt ${dogName}. You already have ${this.dog.name}!`
    }
    var adoptDog = new Dog ({ name: dogName, age: dogAge})
    this.dog = adoptDog
  }
}

module.exports = Person;

// npm test adopt-a-dog/test/person-test.js