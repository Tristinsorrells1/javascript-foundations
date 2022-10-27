var Statue = require('../exercises/statue');
var Person = require('../exercises/person');
var Person1 = require('./person');

class Medusa {
    constructor(name) {
        this.name = name
        this.statues = []
    }

    gazeAtVictim(victim){
        var newStatue = new Statue(victim.name)
        this.statues.push(newStatue)
        if (this.statues.length > 3) {
            var person = this.statues.splice(0, 1)
            return new Person(person[0].name, person.mood='relieved')
        }
    }
}



module.exports = Medusa;

// npm test mythical-creatures/test/medusa-test.js