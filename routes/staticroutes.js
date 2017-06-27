module.exports = function(app){
    var notesController = require("../controllers/notesController");
    var userController = require("../controllers/userController");
    app.get('/', function(req,res){ 
        res.render('login');  
    });
    app.get('/home/:userId', function(req, res){
        notesController.getAllNotesByUser(req.params.userId, function(err, result){
            res.render('home', {notes: result });
        });
    });
    app.get('/myaccount/:userId', function(req, res){
        res.render('myaccount', {userId : req.params.userId});
    });
    app.get('/editscribble/:userId/:noteId', function(req, res){
        notesController.getNoteById(req.params.noteId, function(err, result){
            res.render('editscribble', {noteId : result[0].NoteId, noteContent : result[0].NoteContent, lastEditDate : result[0].LastEditDate, userId : req.params.userId});
        });
    });
    app.get('/newscribble/:userId', function(req, res){
        res.render('newscribble', {userId : req.params.userId});
    });
}