class Direwolf {
    constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name
    this.home = home
    this.size = size
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
    }
    protect(stark) {
        if(this.home === stark.location && this.starksToProtect.length < 2) {
        stark.safe = true
        this.huntsWhiteWalkers = false
        return this.starksToProtect.push(stark)
        }
    }

    leave(stark){
        if (stark.safe){
            this.starksToProtect.shift(this.starksToProtect[0])
            stark.safe = false

        }
    }
}





module.exports = Direwolf;