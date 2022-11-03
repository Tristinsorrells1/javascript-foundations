class Snack {
    constructor(name, price){
    this.name = name
    this.price = price
    this.itemsInStock = 0
    }

    stockItems(stockNum){
      this.itemsInStock = this.itemsInStock + stockNum
    }

    removeItem(){
        if (this.itemsInStock > 0) {
            this.itemsInstock = this.itemsInStock --
             return `Item taken! There are now ${this.itemsInStock} items left.`
        }
        else {
            return `Sorry, no ${this.name} left in stock!`
        }
    }
}

module.exports = Snack;

// npm test vending-machine/test/vending-machine-test.js