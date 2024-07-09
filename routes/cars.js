const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')

router.post('/', carController.createCar)
router.get('/', carController.getAllCars)
router.get('/user/:id', carController.getCarsByUserId)
router.get('/user/:id/:carId', carController.getCarById)

module.exports = router
