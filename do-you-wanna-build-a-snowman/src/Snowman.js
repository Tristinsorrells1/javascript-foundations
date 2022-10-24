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
    if (this.buttons < 5 || this.coal < 2 || this.carrots < 1 || this.snowballs < 2) {
        this.magicHat = false
        return false
    }
    else {
        this.magicHat = true
        return true
    }
}
}


module.exports = Snowman;

