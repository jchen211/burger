// mySQL
var mysql = require("mysql");

// connection to mySQL to burgers_db
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "lavii677914744",
  database: "burgers_db"
});

// the connection method to make sure connected
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export mySQL connection for ORM
module.exports = connection;
