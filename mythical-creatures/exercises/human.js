const Ogre = require('../exercises/ogre');

class Human{
    constructor(name){
        this.name = name
        this.encounterCounter = 0
        this.knockedOut = false
    }

    noticesOgre(){
        if (this.encounterCounter > 2 && this.encounterCounter <6){
            this.encounterCounter = 0
            return true
        }
        else if (this.encounterCounter >= 6){
            this.knockedOut = true

        }
        else {
            return false
        }
    }
}


module.exports = Human;