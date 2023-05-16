const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    riderId:{
        type: String,
        required: true,
    },
    driverId:{
        type: String,
        required: true,
    },
},

{
    timestamps: true,
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;