var Skater = require('./skater.js');


class SkatePark {
    constructor(skateParkInfo){
        this.name = skateParkInfo.name
        this.yearFounded = skateParkInfo.year
        this.style = skateParkInfo.type
        this.features = skateParkInfo.features
        this.isPrivate = skateParkInfo.isPrivate || false
        this.cost = skateParkInfo.price || 0
        this.occupants = [ ]
    }
    admit(skaterInfo){
        if (this.occupants.length === 3) {
            return 'Sorry, we are at max capacity. Thank you for understanding.'
        }
        if (this.isPrivate && skaterInfo.money > this.cost) {
                skaterInfo.money -= this.cost
                this.occupants.push(skaterInfo)
                return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
            }
        else if (this.isPrivate && skaterInfo.money < this.cost) {
                return `Sorry, you don't have enough money.`
            }
            this.occupants.push(skaterInfo)
            return `Welcome to the free ${this.name} Skatepark!`
        }
        }

    






module.exports = SkatePark;

// npm test skate-park/skatepark-test.js