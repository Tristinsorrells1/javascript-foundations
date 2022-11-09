class Recipe {
    constructor(ingredientInfo){
        this.name = ingredientInfo.name
        this.ingredients = ingredientInfo.ingredients
        this.attempted = false
        this.rating = null
    }
    rateRecipe(num){
        this.attempted = true
        this.rating = num
    }
    changeIngredientAmount(ing, num){
        for (var i = 0; i < this.ingredients.length; i++){
            if (this.ingredients[i].name === ing){
                this.ingredients[i].amount = num
            }
        }
    }
    generateGroceryList(){
        for (var i = 0; i < this.ingredients.length; i++){
           return `You need: ${this.ingredients[0].amount} ${this.ingredients[0].name}, ${this.ingredients[1].amount} ${this.ingredients[1].name}, ${this.ingredients[2].amount} ${this.ingredients[2].name}, ${this.ingredients[3].amount} ${this.ingredients[3].name}, ${this.ingredients[4].amount} ${this.ingredients[4].name}, ${this.ingredients[5].amount} ${this.ingredients[5].name}, `
        }
    }

}


module.exports = Recipe;
