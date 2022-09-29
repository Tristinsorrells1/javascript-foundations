class Vampire {
    constructor(name, pet, thirsty) {
    this.name =name;
    this.pet =pet;
    if (pet === undefined){
        this.pet="bat"
    }
    this.thirsty =thirsty;
    if (thirsty === undefined) {
        this.thirsty=true
    }
 
}
}

var dracula = new Vampire();
module.exports = Vampire;

