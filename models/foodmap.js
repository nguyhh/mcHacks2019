const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for foodmap
const FoodMapSchema = new Schema({
  _id: {type: String},
  latitude: {Number, required:true},
  longitude: {Number, required:true},
  centerName: {type: String, required: true, max:100},
  centerType: {type: String, required: true, max:100},

})

//create model for foodmap
const FoodMap = mongoose.model('foodmap', FoodMapSchema);

module.exports = FoodMap;