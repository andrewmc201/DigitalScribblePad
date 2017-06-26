var usersModel = require('../models/users');

exports.getUserIdByUserName = function(username, callback){
    usersModel.getUserIdByUsername(username, function(err, result){
        if(err) {
            callback(err, null);
        }
        else {
            callback(null, { 'userId' : result[0].UserId, 'userName' : result[0].UserName, 'lastLogin' : result[0].LastLogin });
        }
    });
};

exports.addNewUser = function(username, password, callback){
    usersModel.addNewUser(username, password, function(err, result){
        if(err){
            callback(err, null);
        } else {
            callback(null, {'status' :'User successfully added'});
        }
    });
};

exports.updatePassword = function(newPassword, userId, callback) {
    usersModel.updatePassword(newPassword, userId, function(err, result){
        if(err) {
            callback(err, null);
        } else {
            callback(null, {'status' : 'Password successfully changed.'});
        }
    });
};

exports.deleteUser = function(userId, callback) {
    usersModel.deleteUserById(userId, function(err, result){
        if(err) {
            callback(err, null);
        } else {
            callback(null, {'status' : 'User successfully deleted.'});
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