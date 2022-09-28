class Dragon {
    constructor(name, rider, eats, hungry) {
this.name = name;
this.rider =rider;
this.eats =eats;
if (eats === undefined) {
this.hungry = true;
this.eats =0;
}
if (this.eats>2) {
    this.hungry =false;
}
}


eat() {
    this.eats++
    console.log(this.eats)
    if (this.eats > 2) {
        this.hungry = false;
    }
}


greet(message) {
    return `Hi, ${this.rider}!`
}
}


 var smaug = new Dragon(); 

module.exports = Dragon;