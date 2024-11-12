const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
require("dotenv").config()

const cardRouter = require('./controllers/cards/cardRoutes')

const app = express()

app.use(helmet())

app.use(express.json());

const corsOption = {
    origin: ["http://localhost:3000", "https://mellifluous-dieff.netlify.app"], 
    optionsSuccessStatus: 200
}

app.use(cors(corsOption))

const PORT = process.env.PORT || 10000


app.use("/", cardRouter)

module.exports = {
    app,
    PORT
}