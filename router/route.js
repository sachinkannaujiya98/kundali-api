const express = require('express')
const router = express.Router()
const User = require("../models/users")

//  create users
router.post("/users", async (req, res) => {
    const { full_name, father_name, gender, age, pob, birthday, delivery_address, email, mobile_no } = req.body;
    if (!full_name || !father_name || !gender || !age || !pob || !birthday || !delivery_address || !email || !mobile_no) {
        return res.json({ error: "please fill the data" })
    }
    const userData = new User({ ...req.body });
    const insertUser = await userData.save();
    return res.status(201).json(insertUser);
});

// view all users

router.get("/all-users", async (req, res) => {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
});

//  find user by id 

router.get("/user/:id", async (req, res) => {
    const { id } = req.params;
    const singleUser = await User.findById(id);
    return res.status(200).json(singleUser);
});

// delete single user 
router.delete("/user/:id", async (req, res) => {
    const { id } = req.params;
    const singleUser = await User.findByIdAndDelete(id);
    return res.status(200).json(singleUser);
});

module.exports = router