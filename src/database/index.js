const mongoose = require('mongoose')

// conectando ao mongodb
function connect(){

    mongoose.connect('mongodb://127.0.0.1:27017/projeto-crud')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to database!')
    })

    db.on('error', console.error.bind(console, 'Connection error: '))
}

module.exports = {
    connect
}