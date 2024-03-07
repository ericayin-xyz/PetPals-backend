const express = require('express');
const mongoose = require('mongoose');
// const { app, PORT } = require('./server')

// app.listen(PORT, () => {
//     mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('Database connected!'))
//     .catch(error => console.log(error.message));
// })



const cardRouter = require('./controllers/cards/cardRoutes');

const app = express()

app.use(express.json());

const PORT = 5000

app.get('/', (req, res) => {
    res.json({
        data: "Data Sent"
    })
})

app.use('/cards', cardRouter)

app.listen(PORT, () => {
    console.log("Server Started!")
    mongoose.set('strictQuery', false)
    mongoose.connect("mongodb://127.0.0.1:27017/petpals", () => {
        console.log("Database connected!")
    })
})

