const mongoose = require('mongoose');

const userSchemas = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,

    },
    first_name:{
        type: String,
        required: true,
    },
    last_name:{
        type:String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    city:{
        type:String,
        required: true,
    },
    useremailverified: {
        type: Boolean,
        default: false,
      },
     
},

{
    timestamps: true,
});

const User = mongoose.model("Users", userSchemas);

module.exports = User;


//{
//     "email":"14mayankgarg2001@gmail.com",
//     "password":"123",
//     "first_name":"aa",
//     "last_name":"aa",
//     "age":"23",
//     "city":"aa"
// }