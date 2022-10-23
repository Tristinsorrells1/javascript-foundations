class Centaur{
    constructor(centaur){
        this.name = centaur
        this.breed = centaur.type
        this.cranky = false
        this.standing = true
        this.count = 0
        this.layingDown = false

    }

    shootBow(){
        this.count ++
        if(this.count >= 3 || this.layingDown){
            this.cranky = true
            return "NO!"
        }
        return 'Twang!!!'
    }

    run(){
        this.count ++
        if (this.count >= 3 || this.layingDown) {
            this.cranky = true
            return "NO!"
        }
        return 'Clop clop clop clop!!!'
    }

    sleep(){
        if (this.layingDown){
            this.cranky = false
            this.count = 0
            return 'ZZZZ'
        }
        return "NO!"
    }

    layDown(){
       this.standing = false
       this.layingDown = true 
    }

    standUp(){
        this.standing = true
        this.layingDown = false
    }

    drinkPotion(){
        if (this.standing) {
        this.cranky = false
        }
        else {
            return 'Not while I\'m laying down!'
        }

    }
}



module.exports = Centaur;