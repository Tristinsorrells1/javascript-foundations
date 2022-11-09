class Ingredient {
  constructor(ingredientInfo){
    this.name = ingredientInfo.name
    this.amount = ingredientInfo.amount
  }
  changeAmount(num){
    this.amount = num
  }
}

module.exports = Ingredient;
