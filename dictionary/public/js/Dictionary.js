//Node.js web server for this web site
const express = require("express");
const app = express();
const myDB = require('./word');
const Handler = require('./conftroller');
let  _config = {};  

let _port = 8080;
exports.Server = (function(){

app.use("/static", express.static("public/"))

app.set("view engine", "pug")

app.get("/", Handler.Controller.HomePageHandler)

app.get("/api/v1/words", express.json(), Handler.Controller.WordDictionaryHandler);


function startServer(config, port) {
    _config = config;
    myDB.DB.setConfig(_config);
    _port = port;
    app.listen(_port, function(){
        console.log("Server astarted att port " + _port);
    })
}
return {
    start : function (config, port) {
      startServer(config, port); 
    }
    }
})();
