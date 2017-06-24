var notesModel = require('../models/notes');

exports.getNoteById = function(noteId){
    return notesModel.getNoteById(noteId);
};

exports.getAllNotesByUser = function(userId) {
    return notesModel.getNotesByUser(userId);
};

exports.updateNote = function(noteId, noteString){
    notesModel.updateNote(noteId, noteString);
};

exports.createNote = function(userId, noteString){
    notesModel.createNote(userId, noteString);
};

exports.deleteNote = function(noteId) {
    notesModel.deleteNote(noteId);
};