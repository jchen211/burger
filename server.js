//express and express handlebars
var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

app.use(express.static("public"));

var PORT = process.env.PORT || 8080;

// setting up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// setting up routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//making sure server is listening to the PORT
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  