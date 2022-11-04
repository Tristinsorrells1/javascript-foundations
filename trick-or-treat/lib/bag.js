var Candy = require('../lib/candy');

class Bag {
    constructor(){
        this.empty = true
        this.count = 0
        this.candies = []
    }

    fill(candy){
        var newCandy = new Candy(candy)
        this.candies.push(newCandy.type)
        this.count ++
    }
}




module.exports = Bag

// npm test trick-or-treat/test/bag-test.js
