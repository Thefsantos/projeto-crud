const router = require('express').Router()
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

router.get('/', IndexController.index)

// registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//  listar registros
router.get('/list', CustomersController.listUsers)

// editar
router.get('/edit', CustomersController.indexEdit)
router.post('/edit/:id', CustomersController.edit)

// remover
router.get('/remove/:id', CustomersController.remove)
module.exports = router