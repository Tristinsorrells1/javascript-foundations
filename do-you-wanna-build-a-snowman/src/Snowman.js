class Snowman {
    constructor(snowmanDetails) {
    this.carrots = snowmanDetails.carrots
    this.coal = snowmanDetails.coal
    this.buttons = snowmanDetails.buttons
    this.snowballs = snowmanDetails.snowballs
    this.magicHat = false
    this.isWearingHat = false
    }
canWearMagicHat(){
    this.magicHat = true
    return true
}
}


module.exports = Snowman;

