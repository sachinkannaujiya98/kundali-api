const mongoose = require("mongoose");
const validator = require("validator");

const product = new mongoose.Schema({
    full_name: {
        type: String,
        // required: true,
    },
    father_name: {
        type: String,
        // required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    // place of birth
    pob: {
        type: String,
        required: true,
    },
    birthday: { type: Date },
    delivery_address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // unique: [true, "Email is already exists"],
        // validate() {
        //     if (!validator.isEmail(value)) {
        //         throw new Error("invalid Email");
        //     }
        // },
    },
    mobile_no: {
        type: Number,
        // required:true,
        minlength: 10,
        maxlength: 10,
        unique: [true, "Mobile number is already exists"],
        // validate(){
        //     if(!validator.isEmail(value)){
        //         throw new Error("invalid Email")
        //     }
        // }
    },
});



// creating collection

const productdata = mongoose.model('Product', product);
module.exports = productdata;
