// EXPRESS SERVER HERE //
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    errorHandler = require('errorhandler');


app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));


if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
}

app.listen(9001); // Not used if Gulp is activated - it is bypassed
exports = module.exports = app; // This is needed otherwise the index.js for routes will not work
