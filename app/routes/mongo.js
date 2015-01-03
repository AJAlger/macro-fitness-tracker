var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var NutritionSchema = new Schema({
    date: String,
    protein: Number,
    carbohydrate: Number,
    fat: Number
});

module.exports = mongoose.model('Nutrition', NutritionSchema);