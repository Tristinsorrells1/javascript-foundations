class Skier {
    constructor(name) {
        this.name = name
        this.hasLiftTicket = true
        this.skillLevel = 1
        this.nextSlope = 'green circle'
    }
    
    takeLesson(){
        return this.skillLevel += 1
    }

    pickSlope(){
        if (this.skillLevel > 4) {
                this.nextSlope = 'black diamond'
        }
       else  if (this.skillLevel >= 3) {
            this.nextSlope = 'blue square'
        }
    }
}


module.exports = Skier;

// npm test ski-lift/test/Skier-test.js