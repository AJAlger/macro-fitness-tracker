var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db, function (err) {
       if (err) {
           console.log('Connection Error: ', err);
       } else {
           console.log('Connection Successful');
       }
     });
    return db;
};
