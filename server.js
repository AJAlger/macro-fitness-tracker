// EXPRESS SERVER HERE //
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    errorHandler = require('errorhandler'),
    mongoose = require('mongoose'),
    baseline = require('./app/routes/');

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));


if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
}

mongoose.connect('mongodb://test:123456@ds029831.mongolab.com:29831/macronutrients');

var router = express.Router();

router.get('/', function(request, response) {
    response.json('This is working. No worries!');
});

router.route('/baseline')

.post(function(request, response) {
        var base = new baseline;
        base.protein = request.body.protein;
        base.carbohydrates = request.body.carbohydrates;
        base.fat = request.body.fat;

        base.save(function(err) {
            if (err)
            response.send(err);

            response.json({ message: "Information sent!"})
        });
    })

.get(function(request, response) {
       baseline.find(function(err, bases) {
           if(err)
           response.send(err);

           response.json(bases);
       });
    });

app.use('/api', router);

app.listen(9001); // Not used if Gulp is activated - it is bypassed
exports = module.exports = app; // This is needed otherwise the index.js for routes will not work
