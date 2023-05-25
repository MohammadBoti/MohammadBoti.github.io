 var mysql = require('mysql');

 exports.DB = (function () {
    var _config;
    var conn; 
    var getConnection = function(){
        conn = mysql.createConnection({
               host: _config.host,
               user: _config.user,
               password: _config.password,
               database : _config.database
            })
    }
    let testDBConnection = function () {    
        return new Promise(function (resolve, reject) {
        getConnection();
        conn.connect(function(err){
                if (err) {
                    reject(err);
                } else {
                    resolve("Connected!");
                }
            })
        })
    }
    let getWordDefinitions = function(words){
        return new Promise(function (resolve, reject) {
            getConnection();
            conn.connect(function(err){
                if (err) {
                    reject(err);
                } else {
                    conn.query("SELECT * FROM entries.entries where word like '" + words + "%' limit 10", function(error, result){
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                }
            })
        })
    }
   return {
       setConfig : function(config){
            _config = config;
       },
       testDBConnect: testDBConnection,
       getWordDefinitions: getWordDefinitions
   }
 })();