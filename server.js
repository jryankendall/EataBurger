var express = require("express");
var routes = require("./controllers/burgers_controller.js");

var app = express();
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.use(express.static('public'));
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
});
  

