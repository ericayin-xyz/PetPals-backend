const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    review: Number
})

const CardSchema = new mongoose.Schema({
    name: String,
    experience: String,
    phone: Number,
    email: Email,
    city: String,
    description: String,
    reviews: [ReviewSchema]
})

