const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true
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
  // birthday: {
  //   day: {
  //     type: Number
  //   },
  //   month: {
  //     type: Number
  //   },
  //   year: {
  //     Number
  //   },
  // },
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
    //   if (!validator.isEmail(value)) {
    //     throw new Error("invalid Email");
    //   }
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

const User = new mongoose.model('User', userSchema);
module.exports = User;
