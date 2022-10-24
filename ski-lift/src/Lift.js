var Skier = require('./Skier');

class Lift {
    constructor(liftLimit) {
        this.inService = true
        this.limit = liftLimit
        this.skiers = []
        this.safetyBar = 'up'
    }

    admitSkier(name, trueOrFalse) {
        var people = new Skier(name)
        this.skiers.push(people)
        // console.log(this.skiers)
    }

} 

module.exports = Lift;