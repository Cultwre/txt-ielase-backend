const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

var mysql = require("mysql2");
const connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: ``,
  database: `txt_ielase`,
});

app.post("/post", (req, res) => {
  const o = req.body;

  connection.query(
    `INSERT INTO lampa (Type, Direct, Color, Lamp, Line, Power, REF1, obj, date) VALUES ("${o.type}", "${o.direct}", "${o.color}", "${o.lamp}", "${o.line}", "${o.power}", "${o.ref1}", "${o.obj}", "${o.date}")`
  );
});

app.delete("/empty", (req, res) => {
  connection.query(`DELETE FROM lampa`, (error, result) => {
    res.send(result);
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening on port 3000`);
  }
});
