var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

// home page with inital burger data
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burgers.create([
    "burger_name"
  ], [
    req.body.burger_name 
  ], function(result) {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.update({
    devoured: true
  }, condition, function(result) {
      res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
