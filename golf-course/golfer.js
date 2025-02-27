class Golfer {
constructor(golferInfo){
    this.name = golferInfo.name
    this.handicap = golferInfo.handicap
    this.frustration = 0
    this.confidence = 0
}
    calculateAvg(par){
        return `I usually shoot a ${this.handicap + par} on average.`
    }
    
    playRound(golfInfo) {
    if (golfInfo.difficulty === "hard"){
        this.frustration += 500
    }
    else if (golfInfo.difficulty === "moderate")
        this.frustration += 100
    }
    hitTheRange(){
        this.confidence += 10
    }
    marvel(course){
        return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
    }
    whatYaShoot(num){
        if (num === 0){
            this.frustration = 10
            return `Booyah!`
        }
        else if (num === 4){
            this.frustration += 20
            return 'Doh!'
        }
        else if (num === 2) {
            this.frustration = 30
            return 'Doh!'
        }
        else if (num === -2){
            this.frustration = 0
            return 'I AM THE GREATEST GOLFER ALIVE!'
        }
        else if (num === 3){
            this.frustration += 20
            return 'Doh!'
        }
        else if (num === -1){
            this.frustration = 0
            return 'I AM THE GREATEST GOLFER ALIVE!'
        }
    }
}

module.exports = Golfer;
