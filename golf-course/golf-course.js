var Golfer = require('./golfer.js')

class GolfCourse {
    constructor(name, difficulty, openiningNum, features){
        this.name = name
        this.difficulty = difficulty
        this.openings = openiningNum
        this.features = features
        this.currentlyPlaying = []

    }
    checkInGroup(group){
        for (var i = 0; i < group.length; i++){
            if (group.length <= this.openings) {
            this.currentlyPlaying.unshift(group[i].name)
            }
            else {
                return 'Sorry, we are currently booked! Please come back later.'
            }
        }
         this.openings -= group.length
        return 'You\'re checked in. Have fun!'
    }
    }



module.exports = GolfCourse;
