var Skier = require('./Skier');

class Lift {
    constructor(liftLimit) {
        this.inService = true
        this.limit = liftLimit
        this.skiers = []
        this.safetyBar = 'up'
    }

    admitSkier(name, hasTicket) {
        var people = new Skier(name)
        if (this.skiers.length < this.limit && hasTicket){
            this.skiers.push(people)
        }
        else if (hasTicket) {
            return `Sorry, ${name}. Please wait for the next lift!`
        }
        else {
            return `Sorry, ${name}. You need a lift ticket!`
    }
}
    startLift(){
        if (this.skiers.length === this.limit){
            this.safetyBar = 'down'
        }
        else {
           var remaining = this.limit - this.skiers.length
           if (remaining === 1) {
            return `We still need ${remaining} more skier!`
            }
           else {
               return `We still need ${remaining} more skiers!`
                }
            }
        }
}

module.exports = Lift;