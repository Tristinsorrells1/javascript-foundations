class Part {
    constructor(partInfo) {
        this.name = partInfo.name 
        this.type = partInfo.type  
        this.value = partInfo.value
        this.broken = false
        this.isValid = true
    }
    checkForValidity() {
        if (this.name === undefined) {
            this.isValid = false
            return 'This part needs a name!'
        }
        else if (this.type === undefined) {
            this.isValid = false
            return 'This part needs a type!'
        }
        else if (this.value === undefined) {
            this.isValid = false
            return 'This part needs a value!'
        }
    }
    }





module.exports = Part;

// npm test spaceport/test/part-test.js