var Snowman = require('./Snowman');

class Human {
    constructor(name){
        this.name = name
        this.wantsToBuildASnowman = true
        this.materials = {
            snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0
        }
    }

    gatherMaterials(material, num){
        this.materials[material] += num;
    }

    buildASnowman(){
        this.snowman = new Snowman(this.materials)
        return this.snowman
    }

    placeMagicHat(snowman){
        if(this.snowman.magicHat === false){
            return 'I guess I didn\'t build it correctly.'
        }
        else {
        return this.snowman.canWearMagicHat()
        }
    }
}

module.exports = Human;