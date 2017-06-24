var usersModel = require('../models/users');

exports.getUserIdByUsername = function(username, callback){
    usersModel.getUserIdByUsername(username, function(err, result){
        if(err) {
            throw err
        }
        else {
            if(result.length > 0){
                callback(null, { 'userId' : result[0].UserId, 'userName' : result[0].UserName, 'lastLogin' : result[0].LastLogin });
            }
            callback(null, {});
        }
    });
};

exports.addNewUser = function(username, password, callback){
    usersModel.addNewUser(username, password, function(err, result){
        if(err){
            throw err;
        } else {
            if(result.length > 0){
                callback(null, {'status' :'User successfully added'});
            }
            callback(null, {'status' : 'User not added'});
        }
    });
};

exports.updatePassword = function(newPassword, userId, callback) {
    return usersModel.updatePassword(newPassword, userId);
};

exports.deleteUser = function(userId, callback) {
    return usersModel.deleteUserById(userId);
};

exports.getUserById = function(userId, callback) {
    usersModel.getUserById(userId, function(err, result) {
        if(err){
            throw err;
        } else {
            if(result.length > 0){
                callback(null, { 'userId' : result[0].UserId, 'userName' : result[0].UserName, 'lastLogin' : result[0].LastLogin });
            }
            callback(null, {});
        }
    });
}