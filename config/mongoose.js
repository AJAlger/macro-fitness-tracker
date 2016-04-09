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
    require('../server/models/user.server.model'); 
    return db;
};
