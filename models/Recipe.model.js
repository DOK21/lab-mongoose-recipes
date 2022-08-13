const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type: string, unique:true, required: true}, //what do we call the part 'unique: true' ? is i the property? //
  enum:'Easy Peasy', 'Amateur Chef', 'UltraPro Chef';
  level: String;
  Ingredients:[type: string];
  cuisine:  {type: string, required: true};
  dishType:{type: string};
  role {breakfast|| main_course|| soup|| snack|| drink|| dessert || other};
  image: String,
  duration: Number, //Minimum value should be 0. 
  creator: String,
  created: Date, //by default -> Today 
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

