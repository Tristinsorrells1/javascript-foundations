const Human = require('../exercises/human');



class Ogre{
    constructor(ogre){
    this.name = ogre.name
    this.home = ogre.abode
    this.swings = 0
    }

    encounter(human){
        human.encounterCounter ++;
        if (human.encounterCounter === 3) {
            this.swings++
        }
        else if (human.encounterCounter === 6){
            human.knockedOut = true
            this.swings++
        }
            
    }

    swingAt(human){
        this.swings++
        
    }

    apologize(human){
        if (human.knockedOut){
            human.knockedOut = false
        }
    }
    }



module.exports= Ogre;