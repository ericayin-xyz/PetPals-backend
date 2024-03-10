const express = require('express');
const mongoose = require('mongoose');
// const { app, PORT } = require('./server')

const cardRouter = require('./controllers/cards/cardRoutes');

const app = express()

app.use(express.json());

const PORT = 5000

app.get('/', (req, res) => {
    res.json({
        data: "Data Sent"
    })
})

// app.use('/cards', cardRouter)

app.listen(PORT, () => {
    console.log("Server Started!")
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
        console.log("Mongodb connected!")
    })
})

//     mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('Database connected!'))
//     .catch(error => console.log(error.message));

