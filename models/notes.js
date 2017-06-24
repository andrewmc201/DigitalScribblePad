var dbconnection = require('./dbconnection');
var mysql = require('mysql');
var Notes = {
     getNoteById:function(noteId, callback) {
        dbconnection.get().query("SELECT * FROM Notes WHERE NoteId = " + mysql.escape(noteId), function(err, result){
            if(err){
                callback(err);
            } 
            else {
                callback(null, result);
            }
        });
    },

    getNotesByUser:function (userId, callback){
        dbconnection.get().query("SELECT * FROM Notes WHERE UserId = " + mysql.escape(userId), function(err, result){
            if(err){
                callback(err);
            } 
            else {
                callback(null, result);
            }
        });
    },

    updateNote:function (noteId, noteString, callback){
        dbconnection.get().query("UPDATE Notes SET NoteContent = " + mysql.escape(noteString) + ", LastEditDate = CURRENT_TIMESTAMP, WHERE NoteId = " + mysql.escape(noteId), function(err, result){
            if(err){
                callback(err);
            } 
            else {
                callback(null, result);
            }
        });
    },

    deleteNote:function (noteId, callback){
        dbconnection.get().query("DELETE FROM Notes WHERE NoteId = " + mysql.escape(noteId), function(err, result){
            if(err){
                callback(err);
            } 
            else {
                callback(null, result);
            }
        });
    },
    createNote: function(userId, noteString, callback){
        dbconnection.get().query("INSERT INTO Notes (UserId, NoteContent) VALUES (" + mysql.escape(userId) + ", " + mysql.escape(noteString) + ")", function(err, result){
            if(err){
                callback(err);
            } 
            else {
                callback(null, result);
            }
        });
    }
}
module.exports = Notes;