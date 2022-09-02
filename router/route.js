const express = require('express')
const router = express.Router()
const Order = require("../models/order")
const User = require("../models/users");
const Product = require("../models/Products");
// var getPassCat= passModel
const mongoose = require("mongoose");

//  create users
router.post("/Order", async (req, res) => {
    // const { full_name, father_name, gender, age, pob, birthday, delivery_address, email, mobile_no } = req.body;
    // if (!full_name || !father_name || !gender || !age || !pob || !birthday || !delivery_address || !email || !mobile_no) {
    //     return res.json({ error: "please fill the data" })
    // }
    const orderData = new Order({ ...req.body });
    const insertUser = await orderData.save();
    return res.status(201).json(insertUser);
});
router.post("/product", async (req, res) => {
    const { full_name, father_name, gender, age, pob, birthday, delivery_address, email, mobile_no } = req.body;
    if (!full_name || !father_name || !gender || !age || !pob || !birthday || !delivery_address || !email || !mobile_no) {
        return res.json({ error: "please fill the data" })
    }
    const orderData = new Product({ ...req.body });
    console.log(req.body)
    const insertUser = await orderData.save();
    return res.status(201).json(insertUser);
});

router.post("/user", async (req, res) => {
    // const { username, password, } = req.body;
    // if (!username || !password) {
    //     return res.json({ error: "please fill the data" })
    // }
    const userdata = new User({ ...req.body });
    const insertUser = await userdata.save();
    return res.status(201).json(insertUser);
});
// view all users

// router.post("/user_details", async (req, res) => {
//     const user = new Order({
//         amount: req.body.amount,
//         products: req.body.products
//     });
//     await user.save();
//     res.send("save")
//     // return res.status(201).json(recive);
// });
router.post("/order", async (req, res) => {
    const order = new Order({
        amount: req.body.amount,
        products: req.body.products
    });

    await order.save();
    res.send("Saved");
});

router.get("/all_information", async (req, res) => {
    const orders = await Order.find()
        .populate("products", "full_name father_name gender pob birthday delivery_address email mobile_no")
        .exec();
    res.json(orders);

});
router.get("/user_information", async (req, res) => {
    const orders = await User.find()
        // .populate("Order")
        .exec();
    res.json(orders);

});

// router.get("/getall_information", async (req, res) => {
//     let id = req.params.id;
//     console.log(id);
//     const restore = await User.find(id).select("full_name father_name gender age pob birthday delivery_address email mobile_no").populate("username", "_id", "full_name", "father_name", " gender", "age ", "pob", "birthday ", "delivery_address ", "email", "mobile_no");
//     return res.status(200).json(restore);
// });
// router.get("/all-users", async (req, res) => {
//     const allUsers = await Order.find();
//     return res.status(200).json(allUsers);
// });

//  find user by id 

// router.get("/user/:id", async (req, res) => {
//     const { id } = req.params;
//     const singleUser = await Order.findById(id);
//     return res.status(200).json(singleUser);
// });

// delete single user 
// router.delete("/user/:id", async (req, res) => {
//     const { id } = req.params;
//     const singleUser = await Order.findByIdAndDelete(id);
//     return res.status(200).json(singleUser);
// });

module.exports = router