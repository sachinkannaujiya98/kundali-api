const mongoose = require('mongoose');

// const DB = `mongodb+srv://avnish:h8nbpbgepspcu54s@cluster0.gixdl.mongodb.net/thapatechnical?retryWrites=true&w=majority`
const DB =`mongodb+srv://sachin:skks1998@cluster0.1oz4x.mongodb.net/kundalidatabase?retryWrites=true&w=majority`
mongoose.connect(DB).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
console.log(err.message);
});