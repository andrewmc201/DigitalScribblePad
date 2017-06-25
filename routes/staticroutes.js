module.exports = function(app){
    app.get('/', function(req,res){ 
        res.render('login');  
    });
    app.get('/home', function(req, res){
        res.render('home');
    });
    app.get('/viewscribble', function(req, res){
        res.render('viewscribble');
    });
    app.get('/myaccount', function(req, res){
        res.render('myaccount');
    });
    app.get('/editscribble', function(req, res){
        res.render('editscribble');
    });
}