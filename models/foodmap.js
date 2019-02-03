const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for foodmap
const FoodMapSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The Foodmap text field is required']
  }
})

//create model for foodmap
const FoodMap = mongoose.model('foodmap', FoodMapSchema);

module.exports = FoodMap;