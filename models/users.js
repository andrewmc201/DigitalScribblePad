var dbconnection = require('./dbconnection');
var mysql = require('mysql');
var User = {
    getUserIdByUsername: function(username, callback) {
        dbconnection.get().query("SELECT * FROM Users WHERE UserName = " + mysql.escape(username), function(err, result){
            if(err) throw err;
            if(result.length > 0){
                return result[0].UserId;
            }
        });
    },

    addNewUser: function (username, password, callback){
        console.log(username);
        console.log(password);
        dbconnection.get().query("INSERT INTO Users (UserName, Password) VALUES (" + mysql.escape(username) + ", " + mysql.escape(password) + ")", function(err, result){
            if(err) throw err;
            return result;
        })
    },

    updatePassword: function (newPassword, userId, callback){
        dbconnection.get().query("UPDATE Users SET Password = " + mysql.escape(newPassword) + " WHERE UserId = " + mysql.escape(userId), function(err, result){
            if(err) throw err;
            return result;
        });
    },

    deleteUserById: function (userId, callback){
        dbconnection.get().query("DELETE FROM Users WHERE UserId =" + mysql.escape(userId), function(err, result){
            if(err) throw err;
            return result;
        });
    },
    getUserById: function(userId, callback){
        dbconnection.get().query("SELECT * FROM Users WHERE UserId = " + mysql.escape(userId), function(err, result){
            if(err) throw err;
            if(result.length > 0){
                return { 'userId' : result[0].UserId, 'userName' : result[0].UserName, 'lastLogin' : result[0].LastLogin };
            }
            return {};
        })
    }
}
module.exports = User;