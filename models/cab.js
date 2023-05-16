const mongoose = require('mongoose');

const cabSchema = new mongoose.Schema({
    modelName:{
        type: String,
        required: true,
    },
    numbPlate:{
        type: String,
        required: true,
    },
},

{
    timestamps: true,
});

const Cab = mongoose.model("Cab", cabSchema);

module.exports = Cab;