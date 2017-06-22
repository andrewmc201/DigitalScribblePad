var mysql = require('mysql');
var dbconnection = require('dbconnection');

function getNoteById(noteId) {
    dbconnection.query("SELECT * FROM Notes WHERE NoteId eq " + mysql.escape(noteId), function(err, result){
        if(err) throw err;
        return result;
    });
}

function getNotesByUser(userId){
    dbconnection.query("SELECT * FROM Notes WHERE UserId eq " + mysql.escape(userId), function(err, result){
        if(err) throw err;
        return result;
    });
}

function updateNote(noteId, noteString){
    dbconnection.query("UPDATE Notes SET NoteContent = " + mysql.escape(noteString) + " WHERE NoteId eq " + mysql.escape(noteId), function(err, result){
        if (err) throw err;
        return result;
    });
}

function deleteNote(noteId){
    dbconnection.query("DELETE FROM Notes WHERE NoteId eq " + mysql.escape(noteId), function(err, result){
        if(err) throw err;
        return result;
    });
}