class Vampire {
    constructor(name, pet, thirsty, ouncesDrank) {
    this.name =name;
    this.pet =pet;
    if (pet === undefined){
        this.pet="bat"
    }
    this.thirsty =thirsty;
    if (thirsty === undefined) {
        this.thirsty=true
    this.ouncesDrank =ouncesDrank;
    if (ouncesDrank === undefined) {
        this.ouncesDrank=0
    }
    }
}

drink() {
    this.thirsty=false
    this.ouncesDrank += 10; 
    if (this.ouncesDrank >= 50) {
        this.ouncesDrank =50;
        return 'I\'m too full to drink anymore!'
        }
}
}

var dracula = new Vampire();
module.exports = Vampire;

