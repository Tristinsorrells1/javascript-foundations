var Snack = require('./snack');

class LunchBox {
    constructor(lunchbox) {
        this.owner = lunchbox.owner
        this.material = lunchbox.madeOf
        this.shape = lunchbox.shape
        this.color = lunchbox.color
        this.snacks = []
    }
    acquireSnack(newSnack) {
        var snacky = newSnack
        newSnack.isInLunchBox = true
        this.snacks.push(newSnack)
    }
    findHealthySnacks(){
        var healthySnacks = []
        for (var i = 0; i < this.snacks.length; i++) {
           if (this.snacks[i].checkForHealthy()) {
                healthySnacks.push(this.snacks[i].type)
            }
        }
        return healthySnacks
    }
}

module.exports = LunchBox;
