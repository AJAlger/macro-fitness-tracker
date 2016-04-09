/**
 * Created by Abdullah-Mac on 3/15/15.
 */

var Nutrition = require('..//models/macro.server.model.js');
var User = require('../models/user.server.model.js');


exports.createUser = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        } 
        res.json(user);
       
    });
}

exports.login = function(req, res) {
    
};

exports.macroSend = function(req, res){

    var macro = new Nutrition();
    macro.date = req.body.date;
    macro.protein = req.body.protein;
    macro.carbohydrate = req.body.carbohydrate;
    macro.fat = req.body.fat;

    macro.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Information sent!"});

    });

};

exports.macroGetAll = function(req, res) {
    Nutrition.find(function (err, nutritionInformation) {
        if (err) {
            res.send(err);
        }

        res.json(nutritionInformation);

    });
};

// =========NEW ROUTE TO ACCESS INDIVIDUAL ITEMS======================== //

//router.route('/nutrition/:_id')

exports.macroGet = function(req, res) {
    Nutrition.findById(req.params._id, function (err, macro) {
        if (err) {
            res.send(err);
        }
        res.json(macro);

    });
};

exports.macroDelete = function(req, res) {
    Nutrition.remove({_id: req.params._id},
        function (err) {
            if (err) {
                res.send(err);
            }
            res.json({message: "Successfully deleted"});

        });
};

