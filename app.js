const express = require("express");
require("./server.js/index");
const User = require("./models/users");

const app = express();
app.use(express.json())

port = process.env.PORT || 5000;
//  create users
app.post("/users", async(req, res) => {
  console.log(req.body);
  const userData =   new User({...req.body});
  const insertUser = await userData.save();
  return res.status(201).json(insertUser);
});
// 
// view all users

app.get("/all-users", async (req, res) => {
  const allUsers = await User.find();
  return res.status(200).json(allUsers);
});


//  find user by id 

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const singleUser = await User.findById(id);
  return res.status(200).json(singleUser);
});

// delete single user 
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const singleUser = await User.findByIdAndDelete(id);
  return res.status(200).json(singleUser);
});

app.listen(port, () => {
  console.log(`server is running on port no ${port}`);
});
