const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    rating: Number,
    description: String,
})

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    experience: String,
    address: {
        type: String,
        minLength: 3,
    },

    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    description: String,
    image: { 
        type: String,
    },
    reviews: [ReviewSchema],
})

const Card = mongoose.model("Card", CardSchema)

module.exports = Card