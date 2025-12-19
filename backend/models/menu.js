const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
})

const menu = mongoose.model("menu", menuSchema)
module.exports = menu;
