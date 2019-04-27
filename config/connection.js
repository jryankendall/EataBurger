var mysql = require("mysql");
var login = require("./login");

var PORT = 3306;

var connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: login.password,
    database: "burgers_db"
});

module.exports = connection;