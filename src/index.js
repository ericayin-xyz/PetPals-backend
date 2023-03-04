const express = require('express')
const mongoose = require('mongoose')

const cardRouter = require('./controllers/cards/cardRoutes')
const searchRouter = require('./controllers/search/searchRoutes')


const app = express()
app.use(express.json());

const PORT =5000

app.get("/", (req, res) => {
    res.json({
        data: "Data"
    })
})

app.use("/cards", cardRouter)
app.use("/search", searchRouter)

app.listen(PORT, () => {
    console.log("Server Started!")
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://127.0.0.1:27017/myapp')
    .then(() => console.log('Database connected!'))
    .catch(error => console.log(error.message));
})


