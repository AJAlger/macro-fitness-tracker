/**
 * Created by Abdullah-Mac on 3/15/15.
 * Updates on 4/9/16.
 */
var Nutrition = require('..//models/macro.server.model.js');
var User = require('mongoose').model('User');
var passport = require('passport');
var _ = require('lodash');

var getErrorMessage = function(err) {
    var message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = "Username already exists";
                break;
            default: 
                message = "Something went wrong";    
        }
    } else {
        for (var errName in err_errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message;
            }
        }
    }
    return message;
};

exports.renderLogin = function(req, res, next) {
    if (!req.user) {
        res.render('login', {
            title: 'Login Form',
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        return res.redirect('/');
    }
};

exports.renderRegister = function(req, res, next) {
  if (!req.user) {
      res.render('register', {
          title: 'Register Form',
          messages: req.flash('error')
      });
  }  
};

exports.render = function(req, res) {
  res.render('index', {
      title: 'MEAN MVC',
      user: req.user ? req.user.username : ''
  })  ;
};

exports.register = function(req, res, next) {
    if (!req.user) {
        var user = new User(req.body);
        var message = null;
        user.provider = 'local';
        user.save(function(err) {
            if (err) {
                var message = getErrorMessage(err);
                req.flash('error', message);
                return res.redirect('/register');
            }

            req.login(user, function(err) {
                if (err)
                    return next(err);

                return res.redirect('/');
            });
        });
    }
    else {
        return res.redirect('/');
    }
};

exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};

exports.createUser = function(req, res, next) {
    var user = new User(req.body);
    
    user.save(function(err) {
        if (err) {
            return next(err);
        } 
        res.json(user);
       
    });
}

exports.getAllUsers = function(req, res, next) {
  User.find({}).then(function(users) {
    res.json(users);
  }, function(err) {
    next(err);
  });
};

exports.getOneUser = function(req, res) {
    res.json(req.user);
};

exports.params = function(req, res, next, id) {
    User.findOne({
        _id: id
    }, function(err, user) {
        if (err) return next(err);
        req.user = user;
        next();
    });
};

exports.update = function(req, res, next) {
  var getUser = req.user.id;
  var updated = req.body;
  User.findByIdAndUpdate(getUser, updated, function(err, user) {
      if (err) return next(err);
      res.json(user);
  });  
};

exports.delete = function(req, res, next) {
    req.user.remove(function(err) {
        if (err) return next(err);
        res.json(req.user);
    });
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

