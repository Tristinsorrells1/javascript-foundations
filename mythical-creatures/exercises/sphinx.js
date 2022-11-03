class Sphinx{
    constructor(){
        this.riddles = []
        this.heroesEaten = 0
    }
  
    collectRiddle(riddle){
        this.riddles.push(riddle)
        if (this.riddles.length > 3){
            this.riddles.splice(0, 1)
        }
    }

    attemptAnswer(answer){
        for (var i = 0; i <this.riddles.length; i++){
        if (answer === this.riddles[i].answer){
            this.riddles.splice(i, 1)
        }   
        else if (!this.riddles[i].answer.includes(answer)){
             this.heroesEaten++
        }
        if (this.riddles.length === 0) {
            return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
        }
    }
    return 'That wasn\'t that hard, I bet you don\'t get the next one'
}

}


module.exports = Sphinx;


// npm test mythical-creatures/test/sphinx-test.js