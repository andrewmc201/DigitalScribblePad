var dbconnection = require('./dbconnection');
var mysql = require('mysql');
var User = {
    getUserIdByUsername: function(username, callback) {
        dbconnection.get().query("SELECT * FROM Users WHERE UserName = " + mysql.escape(username), function(err, result){
            if(err){
                callback(err);
            } 
            else {
                callback(null, result);
            }
        });
    },

    addNewUser: function (username, password, callback){
        dbconnection.get().query("INSERT INTO Users (UserName, Password) VALUES (" + mysql.escape(username) + ", " + mysql.escape(password) + ")", function(err, result){
            if(err){
                callback(err);
            } 
            else {
                callback(null, result);
            }
        })
    },

    updatePassword: function (newPassword, userId, callback){
        dbconnection.get().query("UPDATE Users SET Password = " + mysql.escape(newPassword) + " WHERE UserId = " + mysql.escape(userId), function(err, result){
            if(err){
                callback(err);
            } 
            else {
                callback(null, result);
            }
        });
    },

    deleteUserById: function (userId, callback){
        dbconnection.get().query("DELETE FROM Users WHERE UserId =" + mysql.escape(userId), function(err, result){
            if(err){
                callback(err);
            } 
            else {
                callback(null, result);
            }
        });
    },
    getUserById: function(userId, callback){
        dbconnection.get().query("SELECT * FROM Users WHERE UserId = " + mysql.escape(userId), function(err, result){
            if(err){
                callback(err);
            } 
            else {
                callback(null, result);
            }
        })
    }
}
module.exports = User;