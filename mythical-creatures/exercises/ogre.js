const Human = require('../exercises/human');



class Ogre{
    constructor(ogre){
    this.name = ogre.name
    this.home = ogre.abode
    this.swings = 0
    }

    encounter(human){
        human.encounterCounter ++;
        if (human.encounterCounter>2) {
            this.swings++
        }
            
    }

    swingAt(human){
        this.swings++
        
    }
    }



module.exports= Ogre;