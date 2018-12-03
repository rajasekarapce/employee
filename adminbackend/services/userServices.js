//global User
var User = require("../model/user");

exports.getUsers = function(callback){
    User.find({}, function(err, users){
        if(!err){
            console.log("fetched all employee", users);
        }
        callback(err, users);
    });
}

exports.getUserById = function(req, callback){
    User.findOne({userId:req.params.id}, function(err, user){
        if(!err){
            console.log("fetched single employee", user);
        }
        callback(err, user);
    });
}

exports.createUser = function (req, callback){
    var userDao = new User(req.body);
    userDao.save(function(err, savedUser){
        if(!err){
            console.log(`user registered successfully with userId:${savedUser.userId}`);
        }
        callback(err, savedUser);
    });
}

exports.updateUser = function(req, callback){
    User.update({userId:req.params.id}, req.body, function(err, edituser){
        if(!err){
            console.log("fetched single user", edituser);
        }
        callback(err, edituser);
    });
}

exports.deleteUser = function(req, callback){
    User.remove({userId:req.params.id}, function(err, delUser){
        if(!err){
            console.log("fetched single contact", delUser);
        }
        callback(err, delUser);
    });
}