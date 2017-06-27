var usersModel = require('../models/users');

exports.getUserIdByUserName = function(username, callback){
    usersModel.getUserIdByUsername(username, function(err, result){
        if(err) {
            callback(err, null);
        }
        else {
            if(result.length < 1 || result[0].UserId === undefined || result[0].UserName === undefined || result[0].LastLogin === undefined){
                callback(new Error("Username not found"), null);
                return;
            }
            callback(null, { 'userId' : result[0].UserId, 'userName' : result[0].UserName, 'lastLogin' : result[0].LastLogin });
        }
    });
};

exports.addNewUser = function(username, callback){
    usersModel.addNewUser(username, function(err, result){
        if(err){
            callback(err, null);
        } else {
            exports.getUserIdByUserName(username, function(err, result){
                if(err){
                    callback(err, null);
                }
                callback(null, result);
            })
        }
    });
};

exports.deleteUser = function(userId, callback) {
    usersModel.deleteUserById(userId, function(err, result){
        if(err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

exports.getUserById = function(userId, callback) {
    usersModel.getUserById(userId, function(err, result) {
        if(err){
            callback(err, null);
        } else {
            if(result.length > 0){
                callback(null, { 'userId' : result[0].UserId, 'userName' : result[0].UserName, 'lastLogin' : result[0].LastLogin });
            }
            callback(null, {});
        }
    });
}