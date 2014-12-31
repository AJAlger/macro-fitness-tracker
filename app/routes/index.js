var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NutritionSchema = new Schema({
    date: Date,
    protein: Number,
    carbohydrate: Number,
    fat: Number,
    percentProtein: Number,
    percentCarbohydrate: Number,
    percentFat: Number
});


module.exports = mongoose.model('Nutrition', NutritionSchema);