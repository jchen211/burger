//express and express handlebars
var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

// setting up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//making sure server is listening to the PORT
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  