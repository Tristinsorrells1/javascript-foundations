class Being {
    constructor(named, species) {
        this.name = named
        this.isAlive = true
        this.species = species
        this.credits = 0
    }

    updateCredits(credits) {
        this.credits = this.credits + credits
    }
}


module.exports = Being;

// npm test spaceport/test/being-test.js