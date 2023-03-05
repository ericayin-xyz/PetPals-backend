const mongoose = require('mongoose');
const { app, PORT } = require('./server')

app.listen(PORT, () => {
    console.log("Server Started!")
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://127.0.0.1:27017/petpals')
    .then(() => console.log('Database connected!'))
    .catch(error => console.log(error.message));
})


