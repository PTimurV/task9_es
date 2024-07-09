const carService = require('../services/carService')

exports.createCar = async (req, res) => {
	try {
		const { brand, model, year, userId } = req.body
		if (!brand || !model || !year || !userId) {
			return res.status(400).send('Brand, model, year, and userId are required')
		}

		const newCar = await carService.createCar({ brand, model, year, userId })
		res.status(201).json(newCar)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

exports.getAllCars = async (req, res) => {
	try {
		const cars = await carService.getAllCars()
		res.json(cars)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

exports.getCarsByUserId = async (req, res) => {
	try {
		const cars = await carService.getCarsByUserId(req.params.id)
		res.json(cars)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

exports.getCarById = async (req, res) => {
	try {
		const car = await carService.getCarById(req.params.id, req.params.carId)
		if (!car) return res.status(404).send('Car not found')
		res.json(car)
	} catch (error) {
		res.status(500).send(error.message)
	}
}
