var express = require("express")

var app = express();
var PORT = 8080;

var exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})
  