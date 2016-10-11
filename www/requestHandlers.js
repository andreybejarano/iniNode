var querystring = require("querystring");
var viewPath = "../index.html";
var fs = require("fs");
var conn = require("./connectionDB");

function render(view, cb) {
    fs.readFile(view, "utf8", function (err, data) {
        if (err) {
            throw err;
        }
        cb(null, data);
    });
}

function start(response, postData) {
    console.log("Manipulador de peticion 'iniciar' fue llamado.");
    var body = render(viewPath, function (err, body) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(body);
        response.end();
    });
}

function subir(response, dataPosteada) {
    console.log("Manipulador de petición 'subir' fue llamado.");
    response.writeHead(200, { "Content-Type": "text/html" });
    var sql = "INSERT INTO tableros(idTablero, nombreTablero) VALUES (null, '" + querystring.parse(dataPosteada)["text"] + "');";
    conn.simpleQuery(sql);
    response.write("Tu enviaste: " + querystring.parse(dataPosteada)["text"]);
    response.end();
}

exports.start = start;
exports.subir = subir;