var Costume = require('../lib/costume');
var Bag = require('../lib/bag');
var Candy = require('../lib/candy');

class TrickOrTreater {
    constructor(costume, bag){
        this.dressedUpAs = costume.style
        this.bag = bag
        this.hasCandy = false
        this.countCandies = 0
    }

    putCandyInBag(candy) {
        this.hasCandy = true
        this.bag.candies.push(candy)
        this.countCandies++
        this.bag.count = this.countCandies 
    }

    eat() {
       this.countCandies -- 
        this.bag.candies.splice(0, 1)
    }
}














module.exports = TrickOrTreater

// npm test trick-or-treat/test/trick-or-treater-test.js

