class Skater {
    constructor(skaterInfo) {
       this.name = skaterInfo.name
       this.skill = skaterInfo.skill
       this.tricks = skaterInfo.tricks
        this.money = skaterInfo.cash
        this.frustration = 0
    }
    practice(trick) {
     if (this.tricks[trick] === false) {
        this.frustration ++
     }
     if (this.frustration > 2) {
        this.tricks[trick] = true
        this.frustration = 0
         return `I just learned to ${trick}!!!`
     }
    }
}




module.exports = Skater;

// npm test skate-park/skatepark-test.js