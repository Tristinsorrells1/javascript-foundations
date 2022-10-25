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
        if (this.skiers.length < 2 && hasTicket){
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
        if (this.skiers.length = 4){
            this.safetyBar = 'down'
        }
    }

   
}

module.exports = Lift;