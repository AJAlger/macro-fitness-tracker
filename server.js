// EXPRESS SERVER HERE //
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    Nutrition = require('./app/routes/mongo.js');

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan());


mongoose.connect('mongodb://test:123456@ds029831.mongolab.com:29831/macronutrients',
            function(err) {
                if(err) {
                    console.log('Connection error: ', err);
                } else {
                    console.log('Connection successful');
                }
            });


var router = express.Router();

router.get('/', function(request, response) {
    response.json('This is working. No worries!');
    console.log("cookies: ", request.cookies);

});

router.route('/login')

.post(function(request, response) {


    });


router.route('/nutrition')

.post(function(request, response) {
        var base = new Nutrition;
        base.date = request.body.date;
        base.protein = request.body.protein;
        base.carbohydrate = request.body.carbohydrate;
        base.fat = request.body.fat;
        base.percentProtein = request.body.percentProtein;
        base.percentCarbohydrate = request.body.percentCarbohydrate;
        base.percentFat = request.body.percentFat;

        base.save(function(err) {
            if (err)
            response.send(err);

            response.json({ message: "Information sent!"})
        });
    })

.get(function(request, response) {
        Nutrition.find(function(err, nutritionInformation) {
           if(err)
           response.send(err);

           response.json(nutritionInformation);
       });
    });

router.route('/nutrition/:nutrition_id')

.get(function(request, response) {
        Nutrition.findById(request.params.nutrition_id, function(err, base) {
          if(err)
          response.send(err);

            response.json(base);
        });
    })

.put(function(request, response) {
        Nutrition.findById(request.params.nutrition_id, function(err, base) {
            if(err)
            response.send(err);

            base.date = request.body.date;
            base.protein = request.body.protein;
            base.carbohydrate = request.body.carbohydrate;
            base.fat = request.body.fat;
            base.percentProtein = request.body.percentProtein;
            base.percentCarbohydrate = request.body.percentCarbohydrate;
            base.percentFat = request.body.percentFat;

            base.save(function(err) {
                if(err)
                response.send(err);

                response.json({message: 'Information Updated!'})
            });
        });
    })

.delete(function(request, response) {
        Nutrition.remove({_id: request.params.nutrition_id},
            function(err, base) {
            if(err)
            response.send(err);

                response.json({message: "Successfully deleted"});
        });
    });

app.use('/data', router);

app.listen(9001); // Not used if Gulp is activated - it is bypassed
exports = module.exports = app; // This is needed otherwise the mongo.js for routes will not work
