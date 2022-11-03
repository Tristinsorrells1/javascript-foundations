var Skier = require('./Skier');

class Lift {
    constructor(liftLimit) {
        this.inService = true
        this.limit = liftLimit
        this.skiers = []
        this.safetyBar = 'up'
    }

    admitSkier(name, hasTicket) {
        var newSkier = new Skier(name)
        if (hasTicket) {
            if (this.skiers.length < this.limit) {
                 this.skiers.push(newSkier)
            }
            return `Sorry, ${newSkier.name}. Please wait for the next lift!`
         }
        return `Sorry, ${newSkier.name}. You need a lift ticket!`
}

    startLift() {
        if (this.limit === this.skiers.length) {
        this.safetyBar = 'down'
        }
        var neededSkiers = this.limit -= this.skiers.length
        if (neededSkiers === 1) {
            return `We still need ${neededSkiers} more skier!`
        }
        else return `We still need ${neededSkiers} more skiers!`
    }

}

module.exports = Lift;

// npm test ski-lift/test/Lift-test.js