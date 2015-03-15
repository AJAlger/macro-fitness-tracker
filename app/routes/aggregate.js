/**
 * Created by Abdullah-Mac on 3/14/15.
 */
var mongoose = require('mongoose'),
    Nutrition = require('./mongo.js');

Nutrition.aggregate([
    {$group: {
        paverage: {$avg: '$protein'},
        caverage: {$avg: '$carbohydrates'},
        faverage: {$avg: '$fat'}
            }
        }
    ], function(err, result) {
        if(err) {
            console.log(err);
            return;
        }
        console.log(result);

});