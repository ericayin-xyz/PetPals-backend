const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    point: Number,
    description: String,
})

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
    },
    experience: String,
    phone: Number,
    email: {
        type: String,
        required: true,
    },
    address: String,
    description: {
        type: String,
        validate: {
            validator: (value) => {
                return !value.includes("hello")
            },
            message: "Description cannot contain the word ",
        }
    },
    reviews: [ReviewSchema]
})

const Card = mongoose.model('Card', CardSchema)

module.exports = Card