var Snack = require("../src/snack.js");

class VendingMachine {
    constructor(vendingObj){
        this.id = vendingObj.id
        this.isBroken = vendingObj.isBroken
        this.snacks = []

    }

    addSnacks(snack){
        for (var i; i < this.snacks.length; i++) {
            if (!this.snacks.includes(this[i].name)) {
                this.snacks.push(this.name)
             }
            else {
             return 'Sorry, that snack is already stocked! Try adding a different snack.'}
    }
    
}
}

module.exports = VendingMachine;
