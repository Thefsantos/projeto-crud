const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const db = require('./database')
const routes = require('./routes')

const app = express()

// conexão
db.connect()


// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//  definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//  habilita o server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

//  definindo as rotas
app.use('/', routes)

// 404 error
app.use((req, res) => {
    res.send('Página não encontrada')
})

// executando o serivdor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))