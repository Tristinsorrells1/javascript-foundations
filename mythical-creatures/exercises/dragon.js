class Dragon {
    constructor(name, rider, eat, hungry) {
this.name = name;
this.rider =rider;
this.eat =eat;
if (eat === undefined) {
this.hungry = true;
}
}


greet(message) {
    return `Hi, ${this.rider}!`
}
}


 var smaug = new Dragon(); 

module.exports = Dragon;