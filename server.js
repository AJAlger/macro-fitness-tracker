(function () {
    'use strict';
// EXPRESS SERVER HERE //
var express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
        cookieParser = require('cookie-parser'),
        methodoverride = require('method-override'),
        errorHandler = require('errorhandler'),
        morgan = require('morgan'),
        Nutrition = require('./app/routes/mongo.js');

// =========================CONFIGURATION===========================//
// =================================================================//
    app.use(express.static(__dirname + '/app'));
    app.use('/bower_components', express.static(__dirname + '/bower_components'));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(methodoverride());

    if (process.env.NODE_ENV === 'development') {
        app.use(errorHandler());
    }

    mongoose.connect('mongodb://test:123456@ds029831.mongolab.com:29831/macronutrients',
            function (err) {
            if (err) {
                console.log('Connection error: ', err);
            } else {
                console.log('Connection successful');
            }
        });

// ==========================ROUTER=================================//
// =================================================================//

    var router = express.Router();
// ================================= //

// NEED A LOGIN PAGE ROUTE HERE


// ================================= //

// ACCESS THE MAIN ROUTE FOR THE INFORMATION PASSED AND ACCESSED
    router.route('/nutrition')

    // ===========POST INFORMATION====================== //
        .post(function (request, response) {
            var macro = new Nutrition();
            macro.date = request.body.date;
            macro.protein = request.body.protein;
            macro.carbohydrate = request.body.carbohydrate;
            macro.fat = request.body.fat;

            macro.save(function (err) {
                if (err) {
                    response.send(err);
                }
                    response.json({ message: "Information sent!"});

            });

        })

        // ===========ACCESS INFORMATION====================== //
        .get(function (request, response) {
            Nutrition.find(function (err, nutritionInformation) {
                if (err) {
                    response.send(err);
                }

                    response.json(nutritionInformation);

            });
        });

        // =========NEW ROUTE TO ACCESS INDIVIDUAL ITEMS======================== //

    router.route('/nutrition/:_id')

        // ===========ACCESS INFORMATION====================== //
        .get(function (request, response) {
            Nutrition.findById(request.params._id, function (err, macro) {
                if (err) {
                    response.send(err);
                }
                    response.json(macro);

            });
        })

        // ==============DELETE INFORMATION=================== //
        .delete(function (request, response) {
            Nutrition.remove({_id: request.params._id},
                    function (err, macro) {
                    if (err) {
                        response.send(err);
                    }
                        response.json({message: "Successfully deleted"});

                });
        });

    // =============WHERE TO ACCESS THE API==================== //
    app.use('/data', router);

    // =============LISTEN FOR EVENTS ON 9001 IF RUNNING NODE==================== //
    // Took the listener out because of conflicts with C9 on January 13 2015

    exports = module.exports = app; // This is needed otherwise Mongoose Code will not work

}());