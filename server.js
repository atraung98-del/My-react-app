import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
app.use(cors());

const db = new sqlite3.Database("./first.db");

// create table//
db.run(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT
)
`);



// API//

app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, columns) => {
    if (err) return res.status(500).json(err);
    res.json(columns);
  
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
db.serialize(()=>{
  db.run("DELETE FROM users");

  db.run("INSERT INTO users (id,name,agency,location,status) VALUES(1,'Hokkaido','TTB-agen','198 128','North')");
  db.run("INSERT INTO users (id,name,agency,location,status)VALUES (2,'Tokyo','OON-agen','148 129','South')");
  db.run("INSERT INTO users (id,name,agency,location,status) VALUES (3,'Osaka','CCD-agen','231 198','West') ");
  db.run("INSERT INTO users (id,name,agency,location,status) VALUES (4,'Kyoto','BBC-agen','213 110','East')");
  db.run("INSERT INTO users (id,name,agency,location,status) VALUES (5,'Nagano','VVN-agen','330 990','Middle')");
  db.run("INSERT INTO users (id,name,agency,location,status) VALUES (6,'Matusmoto','NNO-agen','008 887','Middle of Nagano')");
});