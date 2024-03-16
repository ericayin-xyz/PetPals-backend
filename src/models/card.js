const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    point: Number
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
    },
    phone: {
        type: String,
        required: true
    },
    description: String,
    reviews: [ReviewSchema],
})

const Card = mongoose.model("Card", CardSchema)

module.exports = Card