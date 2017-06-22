var mysql = require('mysql');

function getConnection(){
    var con = mysql.createConnection({
      host: "localhost",
      user: "mcmullena",
      password: "vfmiNVWR7OzgnHhG"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
    return con;
}