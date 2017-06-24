var usersModel = require('../models/users');

exports.getUserIdByUsername = function(username){
    return usersModel.getUserIdByUsername(username);
};

exports.addNewUser = function(username, password){
    return usersModel.addNewUser(username, password);
};

exports.updatePassword = function(newPassword, userId) {
    return usersModel.updatePassword(newPassword, userId);
};

exports.deleteUser = function(userId) {
    return usersModel.deleteUserById(userId);
};

exports.getUserById = function(userId) {
    return usersModel.getUserById(userId);
}