var Statue = require('../exercises/statue');
var Person = require('../exercises/person');
var Person1 = require('./person');

class Medusa {
    constructor(name) {
        this.name = name
        this.statues = []
    }

    gazeAtVictim(victim) {
        var newStat = new Statue(victim.name)
        if (this.statues.length < 3) {
       this.statues.push(newStat)
        }
        else if (this.statues.length = 3) {
            this.statues.push(newStat)
            var newPerson = this.statues.splice(0, 1)
            console.log(newPerson)
           return new Person(newPerson[0].name, newPerson.mood='relieved')
        }
     }
    }

// we are passing in a new instance of person as our argument
// we are using that parameter to name our new statue (and using dot notation to get only the name and not mood)

module.exports = Medusa;

// npm test mythical-creatures/test/medusa-test.js