//Node.js web server for this web site
const myDB = require('./word');

exports.Controller = (function(){
    let  _config = {};  

    let _port = 8080;
    
getHomePageHandler = function(req, res, _port){
    res.render("dict", {
        port: _port
    });
    myDB.DB.testDBConnect().then(mess => console.log(mess));
    res.end();
}

getWordDictionaryHandler = function (req, res){
    myDB.DB.getWordDefinitions(req.query.word).then(result => {
        res.writeHead(200, {"Content-type" : 'application/json'});
        res.end(JSON.stringify(result));
    });
}
return {
        HomePageHandler : function (req, res) {
            getHomePageHandler(req, res);
        },
        WordDictionaryHandler: function (req, res) {
            getWordDictionaryHandler(req, res);
        }
    }
})();

