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
        routes = require('./server/routes/routes.js');

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
                    console.log('Connection Error: ', err);
                } else {
                    console.log('Connection Successful');
                }

            //    var averages = function (macro) {
            //        Nutrition.aggregate([
            //            {
            //                $match: {
            //                    _id: macro
            //                }
            //            },
            //            {
            //                $group: {
            //                    macroAvg: {$avg: '$protein'}
            //                }
            //            }
            //        ], function (err, result) {
            //            if (err) {
            //                console.log(err);
            //                return;
            //            }
            //            console.log(result);
            //
            //        });
            //    };
            //
            //    console.log(averages);
            }
    );


// ==========================ROUTER=================================//
// =================================================================//

    var router = express.Router();
// ================================= //

    router.post('/nutrition', routes.macroSend);
    router.get('/nutrition', routes.macroGetAll);
    router.get('/nutrition/:_id', routes.macroGet);
    router.delete('/nutrition/:_id', routes.macroDelete);

    // =============WHERE TO ACCESS THE API==================== //
    app.use('/', router);

    module.exports = app; // This is needed otherwise Mongoose Code will not work

}());