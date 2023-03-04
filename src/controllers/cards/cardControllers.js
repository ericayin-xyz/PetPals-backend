const Card = require('../../models/card')

const cards = [
    {
        "id": 1,
        "name": "Alice",
        "experience": "Experience: 5 years",
        "phone": "(04) 1666-4784",
        "email": "alice@example.com",
        "address": "Catalinaton",
        "description": "Professional pet sitter with 5 years of experience. Flexible scheduling to accommodate clients' needs",
        "value": "5"
    },
    {
        "id": 2,
        "name": "Bob",
        "experience": "Experience: more than 5 years",
        "phone": "(04) 4635-7736",
        "email": "bob@example.com",
        "address": "East Vinnieton",
        "description": "Excellent communication skills, including regular updates for pet owners while they are away.",
        "value": "4.5"
    },
    {
        "id": 3,
        "name": "Charlie",
        "experience": "Experience: 1 year",
        "phone": "(02) 4861-4744",
        "email": "charlie@example.com",
        "address": "South Noemietown",
        "description": "Skilled in providing exceptional care and attention to pets of all types and sizes.",
        "value": "3.8"
    }
]

async function getCards() {
    const cards = await Card.find()
    return cards
}

async function getCardById(cardId) {
    try {
        const card = await Card.findById(cardId)
        return card
    } catch(err) {
        console.log(err)
    }
}

async function createCard(card) {
    const newCard = await Card.create(card)
    return newCard
}

module.exports = {
    getCards,
    getCardById,
    createCard
}