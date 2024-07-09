const carRepo = require('../repos/carRepo')

exports.createCar = carData => {
	return carRepo.createCar(carData)
}

exports.getAllCars = () => {
	return carRepo.getAllCars()
}

exports.getCarsByUserId = userId => {
	return carRepo.getCarsByUserId(userId)
}

exports.getCarById = (userId, carId) => {
	return carRepo.getCarById(userId, carId)
}
