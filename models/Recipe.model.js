const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type: string, unique:true, required: true}; //what do we call the part 'unique: true' ? is i the property? //
  enum:|'Easy Peasy', 'Amateur Chef', 'UltraPro Chef'|,
  level: String,
  Ingredients:[string],
  cuisine:  {type: String, required: true},
  dishType: String,
  role {breakfast, main_course, soup, snack, drink, dessert or other};
  image: String,
  duration: Number,
  creator: String,
  created: Date, 
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

