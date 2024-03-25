const express = require('express')
const {getCards, getCardById, createCard, updateCard, deleteCard } = require('./cardControllers')
const cardRouter = express.Router()

// let cards = []; // This will store our cards in memory

cardRouter.get("/petparent/sitters", async (req, res) => {
    const cards = await getCards()
    res.json(cards)
})

cardRouter.get("/petparent", async (req, res) => {
    const cards = await getCards()
    res.json(cards)
})

cardRouter.get("/petparent/:cardId", async (req, res) => {
    const card = await getCardById(req.params.cardId)
    if(!card) {
        res.status(404).json({
            data: "Card Not Found"
        })
    }
    res.json(card)
})

cardRouter.post("/petsitter", async (req, res) => {
    const card = await createCard({
        name: req.body.name,
        experience: req.body.experience,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        description: req.body.description,
        image: req.body.image,
    })
    // cards.push(card) // Add the card to our "database"
    res.json(card)
});

cardRouter.put('/petparent/sitters/:cardId', async (req, res) => {
    const updatedCard = await updateCard(req.params.cardId, {
        name: req.body.name,
        experience: req.body.experience,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        description: req.body.description,
        image: req.body.image,
        })
        res.json(updatedCard)
})

cardRouter.delete("/petparent/sitters/:cardId", async (req, res) => {
    const card = await deleteCard(req.params.cardId)
    res.json(card)
})

module.exports = cardRouter



