var mysql = require('mysql');
var dbconnection = require('dbconnection');

function getUserIdByUsername(username) {
    dbconnection.query("SELECT * FROM Users WHERE UserName eq " + mysql.escape(username), function(err, result){
        if(err) throw err;
        if(result.length > 0){
            return result[0].UserId;
        }
    });
}

function addNewUser(username, password){
    dbconnection.query("INSERT INTO Users (UserName, Password) VALUES (" + mysql.escape(username) + ", " + mysql.escape(password) + ")")
}

function updatePassword(newPassword, userId){
    dbconnection.query("UPDATE Users SET Password = " + mysql.escape(newPassword) + " WHERE UserId = " + mysql.escape(userId), function(err, result){
        if(err) throw err;
        return result;
    });
}

function deleteUserById(userId){
    dbconnection.query("DELETE FROM Users WHERE UserId =" + mysql.escape(userId), function(err, result){
        if(err) throw err;
        return result;
    });
}