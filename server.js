// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express configuration
var app = express();

//Set initial port to work on heroku or locally
var PORT = process.env.PORT || 8080;

//Set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Router: requires routes and runs functions
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });