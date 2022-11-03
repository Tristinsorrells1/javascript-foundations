class Dog {
  constructor(dogInfo) {
    this.name = dogInfo.name
    this.age = dogInfo.age
    this.energyLevel = 5
    this.hungry = true
    this.friends = []
  }

  eat() {
    if (this.hungry) {
    this.hungry = false
    return 'Yum!'
    }
    else return `I refuse to eat.`
  }

  fetchBall() {
    if (this.energyLevel > 3) {
    this.energyLevel -= 1
    return 'This is fun!'
    }
    return 'Nah, I\'m going to sleep instead.'
  }

  sleep() {
    if (this.energyLevel < 10) {
      this.energyLevel += 1
    }
    return 'I have too much energy to rest. I\'m going to chew something instead.'
  }

  makeNewFriend(dogInfo) {
    var dogFriend = new Dog(dogInfo)
    this.friends.push(dogFriend.name)
  }
}

module.exports = Dog;

// npm test adopt-a-dog/test/dog-test.js