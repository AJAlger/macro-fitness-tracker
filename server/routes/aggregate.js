/**
 * Created by Abdullah-Mac on 3/14/15.
 */
var mongoose = require('mongoose'),
    Nutrition = require('./mongo.js');

var averages = function(macro) {
    Nutrition.aggregate([
        {$match: {
            _id: macro
        }},
        {$group: {
                macroAvg: {$avg: '$protein'}
            }
        }
    ], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);

    });
};
