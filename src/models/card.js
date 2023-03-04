const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    point: Number,
    description: String,
})

const CardSchema = new mongoose.Schema({
    name: String,
    experience: String,
    phone: Number,
    email: String,
    address: String,
    description: String,
    reviews: [ReviewSchema]
})

const Card = mongoose.model('Card', CardSchema)

module.exports = Card