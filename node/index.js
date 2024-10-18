const express = require("express");
const app = express();
const port = 3000;

const mysql = require("mysql2");
var con = mysql.createConnection({
    host: "database",
    user: "user",
    password: "password",
    database: "db"
});

con.query("CREATE TABLE IF NOT EXISTS people(id INT AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id))");
con.query("INSERT INTO people(name) VALUES('Edwin Pitanga')");

app.get("/", (req, res) => {
    // res.send("<h1>Full Cycle</h1>");
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM people", function (err, result, fields) {
            if (err) throw err;
            let element = "<h1>FullCycle!</h1>";
            for (let i = 0; i < result.length; i++) {
                console.log(result[i].name);
                element += `id: ${result[i].id} - Nome: ${result[i].name} <br/>`;
            }
            res.send(`<h3>${element}</h3>`);
        });
    });
});

app.listen(port, () => {
    console.log("Rodando na porta " + port);
});
