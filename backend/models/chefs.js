const mongoose = require('mongoose');

const chefSchema = mongoose.Schema({
    name: String,
    speciality: String,
    experience: Number,
});

const chefs = mongoose.model("chefs", chefSchema)
module.exports = chefs;