const express = require("express");

const app = express();

//middleware

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5000);
