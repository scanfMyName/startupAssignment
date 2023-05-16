// mongodb cluster user name:VerifytheUser password:47g051DsEChII1rr  //


// url for atlas: 

const mongoose = require('mongoose');
const {MONGO_URI} = process.env;

exports.connect = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGO_URI)
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));
    }