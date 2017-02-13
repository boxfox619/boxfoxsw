(function(){
    var client = require('mongodb').MongoClient,
        mongodb;
 
    module.exports =  {
        connect: function(dbname, callback) {
            client.connect("mongodb://localhost:5050/"+dbname,
                function(err, db){
                    mongodb = db;
                    if(callback) { callback(); }
                });
        },
        db: function() {
            return mongodb;
        },
        close: function() {
            mongodb.close();
        }
    };
})();
