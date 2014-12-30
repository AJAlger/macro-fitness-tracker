var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NutritionSchema = new Schema({
    protein: Number,
    carbohydrates: Number,
    fat: Number
});

module.exports = mongoose.model('baseline', NutritionSchema);