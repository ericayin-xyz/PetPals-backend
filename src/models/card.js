const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    // point: Number,
    description: String,
})

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    experience: String,
    city: {
        type: String,
        minLength: 3,
    },

    email: {
        type: String,
        validate: (value) => {
            return value.includes("@")
        },
        message: "Please enter a valid email address"
    },
    phone: {
        type: String,
        validate: {
            validator: (value) => {
                return /^0\d{9,10}$/.test(value);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: true
    },
    description: String,
    reviews: [ReviewSchema],
})

const Card = mongoose.model("Card", CardSchema)

module.exports = Card