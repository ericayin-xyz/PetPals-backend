const mongoose = require('mongoose');
const { app, PORT } = require('./server')

app.listen(PORT, () => {
    console.log("Server Started!")
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`MongoDB connected! Server running on port ${PORT}!`))
    .catch(error => console.log(error.message));
})

