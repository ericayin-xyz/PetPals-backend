const mongoose = require('mongoose');
const { app, PORT } = require('./server')

app.listen(PORT, () => {
    console.log("Server Started!")
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database connected!'))
    .catch(error => console.log(error.message));
})


