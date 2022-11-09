var Recipe = require('../src/recipe.js');

class Chef {
  constructor(name, array){
    this.name = name
    this.recipeBox = array
  }
  tryRecipe(type, num){
      for (var i = 0; i <this.recipeBox.length; i++){
        if (this.recipeBox[i].name === type){
            this.recipeBox[i].attempted = true
            this.recipeBox[i].rating = num
        }
    }

  }
  addRecipe(type, array){
      for (var i = 0; i < this.recipeBox.length; i++) {
          this.recipeBox[3] = new Recipe({})
          this.recipeBox[3].name = type
        this.recipeBox[3].ingredients = array
      }
  }
  changeRecipe(food1, food2, num){
    this.recipeBox[1].ingredients[0].amount = num

  }
}

module.exports = Chef;
