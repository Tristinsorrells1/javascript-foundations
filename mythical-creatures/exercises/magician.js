
class Magician {
 constructor(magician){
    this.name = `The Great ${magician.name}`
    this.assistant = magician.assistant
    this.favoriteAccessory = magician.clothing || "top hat"
    this.confidencePercentage = 10
 }

 performIncantation(words){
     if (words === 'abracadabra') {
        var spell = words.toUpperCase()
        return `${spell}!`
     }
     else if (words === 'allakazaam')
         var charm = words.toUpperCase()
         return `${charm}!`
 }

 performTrick(){
    this.confidencePercentage +=10
     if (this.favoriteAccessory === "top hat"){
     return 'PULL RABBIT FROM TOP HAT'
    }
     else if (this.favoriteAccessory === "cape"){
        return 'PULL DOVE FROM SLEEVE'
    }
 }

 performShowStopper(){
    if (this.confidencePercentage > 90 && this.assistant){
        return 'WOW! The magician totally just sawed that person in half!'
    }
    else {
       return 'Oh no, this trick is not ready!'
    }
 }
}


module.exports = Magician;


// npm test mythical-creatures/test/magician-test.js