module.exports = function(app){
    var notesController = require("../controllers/notesController");
    var userController = require("../controllers/userController");
    var homeController = require("../controllers/homeController");
    var bodyParser = require('body-parser');
    
    
    app.route('/api/notes/user/:userId')
        .get(function(req, res){
            notesController.getAllNotesByUser(req.params.userId, function(err, result){
                if(err){
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        });
    
    app.route('/api/notes')
        .post(function(req, res){
            notesController.createNote(req.body.userId, req.body.note.substring(0, Math.min(1024, req.body.note.length)), function(err, result){
                if(err){
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        });
    
    app.route('/api/notes/:noteId')
        .get(function(req, res){
            notesController.getNoteById(req.params.noteId, function(err, result){
                if(err){
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        })
        .put(function(req, res){
            notesController.updateNote(req.params.noteId, req.body.note.substring(0, Math.min(1024, req.body.note.length)), function(err, result){
                if(err){
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        })
        
        .delete(function(req, res){
            notesController.deleteNote(req.params.noteId, function(err, result){
                if(err){
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        });
    
    app.route('/api/usernames/:username')
        .get(function(req, res){
            userController.getUserIdByUserName(req.params.username, function(err, result){
                if(err){
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        });
    
    app.route('/api/users')
        .post(function(req, res){
            userController.addNewUser(req.body.username.substring(0, Math.min(255, req.body.username.length)), function(err, result){
                if(err){
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        });
    
    app.route('/api/users/:userId')
        .get(function(req, res){
            userController.getUserById(req.params.userId, function(err, result){
                if(err){
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        })
        .delete(function(req, res){
            userController.deleteUser(req.params.userId, function(err, result){
                if(err){
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        });
    
}

