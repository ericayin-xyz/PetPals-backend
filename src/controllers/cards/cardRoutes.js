const express = require('express')
const {getCards, getCardById, createCard } = require('./cardControllers')

const cardRouter = express.Router()


cardRouter.get("/", (req, res) => {
    const cards = getCards()
    res.json(cards)
})

cardRouter.get("/:cardId", (req, res) => {
    const card = getCardById(req.params.cardId)
    if(!card) {
        res.status(404).json({
            
            data: "Card doesn't exist"
        })
    }
    res.json(card)
})

cardRouter.post("/", (req, res) => {
    const card = createCard({
        name: req.body.name,
        experience: res.body.experience,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        description: req.body.description
    })
    res.json(card)
});

module.exports = cardRouter