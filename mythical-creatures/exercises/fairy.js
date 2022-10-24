
class Fairy {
    constructor(name) {
        this.name = name;
        this.dust = 10;
        this.clothes = {
            dresses: ['Iris']
        }
        this.disposition = 'Good natured'
        this.humanWards = []
        this.babyCount = 0
        
    }
    receiveBelief(){
        this.dust++
    }
    believe(){
        this.dust += 10
    }

    makeDresses(dressArray){
        for (var i =0; i < dressArray.length; i++){
            this.clothes.dresses.push(dressArray[i])
        }
    }

    becomeProvoked(){
        this.disposition = 'Vengeful'
        
    }

    replaceInfant(infant){
        if (this.disposition === 'Vengeful') {
            infant.disposition = 'Malicious'
            this.humanWards.push(infant)
            this.babyCount ++
        }
        if(this.babyCount >2){
            this.disposition = 'Good natured'
        }
    return infant
    }
}






module.exports = Fairy;