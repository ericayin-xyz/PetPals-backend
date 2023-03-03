const express = require('express')

const {getSearch, getStepById} = require('./searchControllers')

const searchRouter = express.Router()


searchRouter.get("/", (req, res) => {
    const search = getSearch()
    res.json(search)
})

searchRouter.get("/step:stepId", (req, res) => {
    const step = getStepById(req.params.stepId)
    if(!step) {
        res.status(404).json({
            
            data: "Search doesn't exist"
        })
    }
    res.json(step)
})

module.exports = searchRouter