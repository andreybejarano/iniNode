var mysql = require("mysql");
var confMySQL = require("./cfg/connMySQL"); 

var connection = mysql.createConnection(confMySQL);

function connect() {
    connection.connect(function (error) {
        if (error) {
            throw error;
        }
        console.log("Conexion correcta.");
    });
}
//This function is for query type INSERT, UPDATE or DELETE
function simpleQuery(sql) {
    connect();
    var query = connection.query(sql, function (error, result) {
        if (error) {
            throw error;
        }
        console.log(result);
    });
}

//This function  is for query type SELECT an d return a Oject with data of db
function query(sql) {
    connect();
    var query = connection.query(sql, function (error, result) {
        if (error) {
            throw error;
        }
        console.log(result);
    });
}

exports.simpleQuery = simpleQuery;