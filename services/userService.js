const userRepo = require('../repos/userRepo')

exports.getAllUsers = () => {
	return userRepo.getAllUsers()
}

exports.getUserById = id => {
	return userRepo.getUserById(id)
}

exports.createUser = userData => {
	return userRepo.createUser(userData)
}
exports.updateUser = (id, userData) => {
	return userRepo.updateUser(id, userData)
}

exports.deleteUser = id => {
	return userRepo.deleteUser(id)
}

// Дополнительные задания
exports.getUsersByAge = age => {
	return userRepo.getUsersByAge(age)
}

exports.getUsersByEmailDomain = domain => {
	return userRepo.getUsersByEmailDomain(domain)
}
