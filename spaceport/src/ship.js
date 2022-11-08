var Being = require('../src/being');
var Part = require('../src/part');

class Ship {
    constructor(shipInfo) {
        this.name = shipInfo.name
        this.type = shipInfo.type
        this.maxCrew = shipInfo.maxCrew || 2
        this.odometer = shipInfo.odometer || 0
        this.fuelCapacity = shipInfo.fuelCapacity || 10
        this.fuel = 0
        this.captain = shipInfo.captain
        this.crew = [ ]
        this.cargo = [ ]
        this.parts = shipInfo.parts || { } 

    }
    addCrew(beingArray){
        for (var i = 0; i < beingArray.length; i++){
            if (this.crew.length < this.maxCrew && beingArray[i] instanceof Being) {
                this.crew + this.crew.push(beingArray[i])
            }
        } return this.crew
    }

    loadCargo(partInfo){
        if (partInfo instanceof Part) {
        var part = new Part(partInfo)
        this.cargo.push(partInfo)
        }
    }

    updatePart(newPartInfo){
        var newPart = new Part({
            name: newPartInfo.name,
            type: newPartInfo.type,
            value: newPartInfo.value
        })
     var addPart = this.parts.hyperdrive=newPart

        
    }
    }





        






module.exports = Ship;

// npm test spaceport/test/ship-test.js