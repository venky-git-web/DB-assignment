const mongoose = require('mongoose');

const restSchema = new mongoose.Schema({
    name:String,
    description:String,
    category:String,
    location:String,
    rating:Number,


})

module.exports = mongoose.model('restaurant',restSchema);