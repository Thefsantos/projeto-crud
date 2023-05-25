const mongoose = require('mongoose')


// definindo schema da db customers
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

const Model = mongoose.model('customers', schema)

module.exports = Model