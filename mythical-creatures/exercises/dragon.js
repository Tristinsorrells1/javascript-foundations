class Dragon {
    constructor(name, rider, eats, hungry) {
this.name = name;
this.rider =rider;
this.eats =eats;
if (eats === undefined) {
this.hungry = true;
}
}

eat() {
    if (this.eat >= 3){
        return false;
    }
}

greet(message) {
    return `Hi, ${this.rider}!`
}
}


 var smaug = new Dragon(); 

module.exports = Dragon;