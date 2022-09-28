class Dragon {
    constructor(name, rider, eat, hungry) {
this.name = name;
this.rider =rider;
this.eat =eat;
if (eat === undefined) {
this.hungry = true;
}
else if (eat >= 3) {
this.hungry = false;
}
}

}






 var smaug = new Dragon(); 

module.exports = Dragon;