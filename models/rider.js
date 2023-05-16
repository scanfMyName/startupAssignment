const mongoose = require('mongoose');

const riderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    rating:{
        type:Number,
        required: true,
    }
     
},

{
    timestamps: true,
});

const Rider = mongoose.model("Rider", riderSchema);

module.exports = Rider;