const Card = require('../../models/card')

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

async function updateCard(cardId, card) {
    const updatedCard = await Card.findByIdAndUpdate(cardId, card, {
        // returnDocument: "before",
        new: true, // return the updated card
        upsert: true, // create a new card if it doesn't exist
    })
    return updatedCard
}

async function deleteCard(cardId) {
    //deleteOne/Many will delete but not return the records
    //findByIdAndDelete / findOneAndDelete returns the records
    const deletedCard = await Card.findByIdAndDelete(cardId)
    return deletedCard
}

module.exports = {
    getCards,
    getCardById,
    createCard,
    updateCard,
    deleteCard
}