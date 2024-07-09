let cars = [
	{ id: 1, brand: 'Toyota', model: 'Corolla', year: 2020, userId: 1 },
	{ id: 2, brand: 'Honda', model: 'Civic', year: 2019, userId: 1 },
	{ id: 3, brand: 'Ford', model: 'Mustang', year: 2018, userId: 2 },
	{ id: 4, brand: 'Chevrolet', model: 'Camaro', year: 2017, userId: 3 },
	{ id: 5, brand: 'BMW', model: 'X5', year: 2021, userId: 4 },
]

exports.createCar = carData => {
	const newCar = {
		id: cars.length + 1,
		...carData,
	}
	cars.push(newCar)
	return Promise.resolve(newCar)
}

exports.getAllCars = () => {
	return Promise.resolve(cars)
}

exports.getCarsByUserId = userId => {
	const userCars = cars.filter(car => car.userId === parseInt(userId))
	return Promise.resolve(userCars)
}

exports.getCarById = (userId, carId) => {
	const car = cars.find(
		car => car.userId === parseInt(userId) && car.id === parseInt(carId)
	)
	return Promise.resolve(car)
}
