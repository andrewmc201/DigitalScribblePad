module.exports = function(app){
    var notesController = require("../controllers/notesController");
    var userController = require("../controllers/userController");
    var homeController = require("../controllers/homeController");
    
    app.route('/notes/:userId')
        .get(notesController.getAllNotesByUser());
    
    app.route('/notes/:userId/:noteId')
        .get(notesController.getNoteById())
        .put(notesController.updateNote())
        .post(notesController.createNote())
        .delete(notesController.deleteNote());
    
    app.route('/users/:username')
        .get(userController.getUserByUserName())
        .post(userController.createUser());
    
    app.route('/users/:userId')
        .get(userController.getUserById())
        .put(userController.updatePassword())
        .delete(userController.deleteUser());
    
    app.route('/')
        .get(homeController.getHomePage());
}

