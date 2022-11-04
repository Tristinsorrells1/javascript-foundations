var Snack = require("../src/snack.js");

class VendingMachine {
    constructor(vendingObj){
        this.id = vendingObj.id
        this.isBroken = vendingObj.isBroken
        this.snacks = []

    }

    addSnacks(snackInfo){
       var newSnack = new Snack(snackInfo)
       for (var i = 0; i < this.snacks.length; i++) {
           if (this.snacks[i].name === newSnack.name.name) {
               return 'Sorry, that snack is already stocked! Try adding a different snack.'
            }
        } 
    this.snacks.push(newSnack.name)
    }

    purchaseSnack(snackName, money){
        for (var i = 0; i < this.snacks.length; i++) {
            if (this.snacks[i].name === snackName) {
                if (this.snacks[i].itemsInStock && money > this.snacks[i].price ){
                    this.snacks[i].itemsInStock --
                    return `Success! Here is $${money - this.snacks[i].price} back!`
                }
                else if (money < this.snacks[i].price) {
                    return 'Sorry, not enough payment. Please add more money.'
                }
                else return `Sorry, no items in stock. Try another item.`
            }
        }  

    }

}


module.exports = VendingMachine;

// npm test vending-machine/test/vending-machine-test.js