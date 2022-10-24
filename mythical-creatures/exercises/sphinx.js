class Sphinx{
    constructor() {
        this.riddles = []
    }

    collectRiddle(riddle){
    if (this.riddles.length >= 3) {
        this.riddles.push(riddle)
        this.riddles.splice(1, 0)
        console.log(this.riddles)
    }
    else {
        this.riddles.push(riddle)
    }
}
}
module.exports = Sphinx;