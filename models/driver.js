const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
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
    },
    cabId:{

        type: String,
        required: true,
    },
    isMatched:{
        type: Boolean,
        default: false,
    }
     
},

{
    timestamps: true,
});

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;