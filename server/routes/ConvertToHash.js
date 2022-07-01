const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dhanushkv@12",
  database: "registrationsystem",
});
db.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + db.threadId);
});

router.use("/", async (req, res) => {
  const { password } = req.body;
  const salt = await bcrypt.genSalt(10);
  console.log(`Salt: ${salt}`);
  hashed_password = await bcrypt.hash(password, salt);
  console.log(`Hash: ${hashed_password}`);
  res.send("Success")
});

module.exports = router;
