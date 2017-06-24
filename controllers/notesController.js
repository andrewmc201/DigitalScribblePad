var notesModel = require('../models/notes');

exports.getNoteById = function(noteId, callback){
    notesModel.getNoteById(noteId, function(err, result){
        if(err) {
            callback(err, null);
        }
        else {
            callback(null, result);
        }
    });
};

exports.getAllNotesByUser = function(userId, callback) {
    notesModel.getNotesByUser(userId, function(err, result){
        if(err) {
            callback(err, null);
        }
        else {
            callback(null, result);
        }
    });
};

exports.updateNote = function(noteId, noteString, callback){
    notesModel.updateNote(noteId, noteString, function(err, result){
        if(err) {
            callback(err, null);
        }
        else {
            callback(null, result);
        }
    });
};

exports.createNote = function(userId, noteString, callback){
    notesModel.createNote(userId, noteString, function(err, result){
        if(err) {
            callback(err, null);
        }
        else {
            callback(null, result);
        }
    });
};

exports.deleteNote = function(noteId, callback) {
    notesModel.deleteNote(noteId, function(err, result){
        if(err) {
            callback(err, null);
        }
        else {
            callback(null, result);
        }
    });
};