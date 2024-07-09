const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

// Дополнительные задания
router.get('/age/:age', userController.getUsersByAge)
router.get('/domain/:domain', userController.getUsersByEmailDomain)

module.exports = router
