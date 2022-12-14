const express = require("express");
const User = require("./models/users");
const bodyParser = require("body-parser")
const app = express();
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('./router/route'));
require('dotenv').config();
require("./db/conn");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello kundali app developer");
})

app.listen(port, () => {
  console.log(`server is running on port no. ${port}`);
});
