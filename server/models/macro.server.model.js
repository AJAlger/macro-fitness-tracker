var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NutritionSchema = new Schema({
    date: Date,
    protein: Number,
    carbohydrate: Number,
    fat: Number
});

module.exports = mongoose.model('Nutrition', NutritionSchema);