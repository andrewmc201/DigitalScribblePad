module.exports = function(app){
    var notesController = require("../controllers/notesController");
    var userController = require("../controllers/userController");
    var homeController = require("../controllers/homeController");
    var bodyParser = require('body-parser');
    
    
    app.route('/api/notes/:userId')
        .get(function(req, res){res.json(notesController.getAllNotesByUser(req.params.userId))});
    
    app.route('/api/notes/:userId/:noteId')
        .get(function(req, res){res.json(notesController.getNoteById(req.params.noteId))})
        .put(function(req, res){res.json(notesController.updateNote(req.params.noteId, req.body.note))})
        .post(function(req, res){res.json(notesController.createNote(req.params.userId, req.body.note))})
        .delete(function(req, res){res.json(notesController.deleteNote(req.params.noteId))});
    
    app.route('/api/users')
        .get(function(req, res){res.json(userController.getUserIdByUserName(req.body.username))})
        .post(function(req, res){res.json(userController.addNewUser(req.body.username, req.body.password))});
    
    app.route('/api/users/:userId')
        .get(function(req, res){
            res.json(userController.getUserById(req.params.userId));
        })
        .put(function(req, res){
            res.json(userController.updatePassword(req.param.userId, req.body.password));
        })
        .delete(function(req, res){
            res.json(userController.deleteUser(req.param.userId));
        });
    
    app.route('/')
        .get(function(req, res){homeController.getHomePage()});
}

