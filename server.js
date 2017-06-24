var path = require('path');
var express = require('express');  
var exphbs = require('express-handlebars');  
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
var database = require('./models/dbconnection');
//
//database.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/api', function(req, res) {
    res.json({message: 'hello world'});
});

routes(app);

app.use('/api', router);

app.engine('.hbs', exphbs({  
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')  
app.set('views', path.join(__dirname, 'views'))  

database.connect(database.MODE_PRODUCTION, function(err) {
  if (err) {
    console.log('Unable to connect to MySQL.')
    process.exit(1)
  } else {
      app.listen(12233);
  }
})