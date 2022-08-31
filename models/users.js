const mongoose = require("mongoose");
// const validator = require("validator");
const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
    // _id: mongoose.Types.ObjectId,
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    },
    orders: [{
        type: mongoose.Types.ObjectId,
        ref: "Order",
        default: []
    }],
});

// creating collection

const User = mongoose.model('User', userSchema);
module.exports = User;
