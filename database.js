const sqlite3 = require("sqlite3");
let d= new sqlite3.Database("./data.db");
d.serialize(function(){
    d.run(
        `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, 
            username TEXT UNIQUE, password TEXT )`
    );
var username="test1";
var password="test1pass";
d.run(
    `INSERT OR IGNORE INTO users (username,password) VALUES
     ('${username}','${password}')`

);
})

module.exports=d;