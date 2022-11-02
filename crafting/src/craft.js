
class Craft {
    constructor(craftInfo) {
        this.name = craftInfo.type
        this.materials = craftInfo.materials
        this.completed= false

    }
    completeCraft(){
        this.completed = true
        return 'All done! It looks great!'
    }


    calculateProjectTotal() {
        console.log(this.materials)
        var totalCost = 0
        for (var i = 0; i < this.materials.length; i++) {
            totalCost += this.materials[i].price * this.materials[i].amount
        }
        return totalCost
    }
}



module.exports = Craft;

