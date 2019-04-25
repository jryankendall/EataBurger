var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/api/all", function(req, res) {
    burger.all(function(data) {
        var handlebarObj = {
            burger: data
        };
        res.render("index", handlebarObj);
    });
});

router.get("/api/:column/:value", function(req, res) {
    burger.bycolumn(req.params.column, req.params.value, function(data) {
        var handlebarObj = {
            burger: data
        };
        res.json(handlebarObj);
    });
});

router.post("/api/add", function(req, res) {
    var data = req.body;
    var columnArray = ["burger_name", "devoured"];
    var valueArray = [data.name, data.devoured];
    burger.insert("burgers", columnArray, valueArray, function(stuff) {
        console.log(stuff);
        res.json(stuff);
    });
});

router.put("/api/devour/:id", function(req, res) {
    var burgerId = req.params.id;
    burger.update("id", burgerId, "devoured", true, function(data) {
        console.log(data);
        res.json(data);
    });
});

module.exports = router;