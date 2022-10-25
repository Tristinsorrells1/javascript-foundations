class Snowman {
    constructor(snowmanDetails) {
    this.carrots = snowmanDetails.carrots
    this.coal = snowmanDetails.coal
    this.buttons = snowmanDetails.buttons
    this.snowballs = snowmanDetails.snowballs
    this.magicHat = true
    this.isWearingHat = false
    }
canWearMagicHat(){
    if (this.buttons < 5 || this.coal < 2 || this.carrots < 1 || this.snowballs < 2) {
        this.magicHat = false
        return 'I guess I didn\'t build it correctly.'
    }
    else {
        this.magicHat = true
        return 'Woah, this snowman is coming to life!'
    }
}
}


module.exports = Snowman;

