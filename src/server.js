const express = require('express')
const path = require('path')

const app = express()

// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//  definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//  habilita o server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

//  rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

// 404 error
app.use((req, res) => {
    res.send('Página não encontrada')
})

// executando o serivdor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))