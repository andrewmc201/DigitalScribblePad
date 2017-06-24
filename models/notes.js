var dbconnection = require('./dbconnection');
var mysql = require('mysql');
var Notes = {
     getNoteById:function(noteId, callback) {
        dbconnection.query("SELECT * FROM Notes WHERE NoteId eq " + mysql.escape(noteId), function(err, result){
            if(err) throw err;
            return result;
        });
    },

    getNotesByUser:function (userId, callback){
        dbconnection.query("SELECT * FROM Notes WHERE UserId eq " + mysql.escape(userId), function(err, result){
            if(err) throw err;
            return result;
        });
    },

    updateNote:function (noteId, noteString, callback){
        dbconnection.query("UPDATE Notes SET NoteContent = " + mysql.escape(noteString) + " WHERE NoteId eq " + mysql.escape(noteId), function(err, result){
            if (err) throw err;
            return result;
        });
    },

    deleteNote:function (noteId, callback){
        dbconnection.query("DELETE FROM Notes WHERE NoteId eq " + mysql.escape(noteId), function(err, result){
            if(err) throw err;
            return result;
        });
    },
    createNote: function(userId, noteString, callback){
        dbconnection.query("INSERT INTO Notes (UserId, NoteContent, LastEditDate) VALUES (" + mysql.escape(userId) + ", " + mysql.escape(noteString) + ", " + new Date() + ")", function(err, result){
            if(err) throw err;
            return result;
        })
    }
}
module.exports = Notes;