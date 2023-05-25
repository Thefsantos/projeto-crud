const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')
const defaultTitle = 'Cadastro de Clientes'

function index(req,res) {
    res.render('register', {
        title: "Cadastro de Clientes"
    })
}

async function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com Sucesso!'
    })
}

async function listUsers(req, res) {
    const users = await CustomersModel.find()

    res.render('list', {
        title: 'Lista de Registros',
        users,
    })
}

async function indexEdit(req, res) {
    const { id } = req.query

    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'Editar Cliente',
        user,
    })
}

async function edit(req, res) {
    const {
        name,
        age,
        email,
    } = req.body
    
    const { id } = req.params

    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        title: 'Editar Cliente',
        user,
        message: 'Cliente alterado com sucesso!',
    })
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await CustomersModel.deleteOne({ _id: id})

    if(remove) {
        res.redirect('/list')
    }
}
module.exports = {
    add,
    index,
    listUsers,
    indexEdit,
    edit,
    remove
}