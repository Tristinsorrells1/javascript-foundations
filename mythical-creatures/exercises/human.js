const Ogre = require('../exercises/ogre');

class Human{
    constructor(name){
this.name = name
this.encounterCounter = 0
    }

    noticesOgre(){
        if (this.encounterCounter > 2){
            this.encounterCounter = 0
            return true
        }
        else {
            return false
        }
    }
}


module.exports = Human;