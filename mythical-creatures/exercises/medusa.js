
var Person = require('../exercises/person');
var Person1 = require('./person');
var Statue = require('./statue');


class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
        }
    
gazeAtVictim(victim){
var newStatue = new Statue(victim.name)
        this.statues.push(newStatue)
        if (this.statues.length > 3) {
           var person = this.statues.splice(0,1)
           return new Person(person.name, 'frightened')
        }

    }
}

module.exports = Medusa; 

// npm test mythical-creatures/test/medusa-test.js