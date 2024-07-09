let users = [
	{ id: 1, name: 'Иван', email: 'первый@example.com', age: 30 },
	{ id: 2, name: 'Петр', email: 'второй@example.com', age: 25 },
	{ id: 3, name: 'Евгений', email: 'третий@example.com', age: 20 },
	{ id: 4, name: 'Алексей', email: 'четвертый@mail.com', age: 25 },
]

exports.getAllUsers = () => {
	return Promise.resolve(users)
}

exports.getUserById = id => {
	const user = users.find(u => u.id === parseInt(id))
	return Promise.resolve(user)
}

exports.createUser = userData => {
	const newUser = {
		id: users.length + 1,
		...userData,
	}
	users.push(newUser)
	return Promise.resolve(newUser)
}

exports.updateUser = (id, userData) => {
	const userIndex = users.findIndex(u => u.id === parseInt(id))
	if (userIndex === -1) return Promise.resolve(null)

	users[userIndex] = { id: parseInt(id), ...userData }
	return Promise.resolve(users[userIndex])
}

exports.deleteUser = id => {
	const userIndex = users.findIndex(u => u.id === parseInt(id))
	if (userIndex === -1) return Promise.resolve(null)

	const deletedUser = users.splice(userIndex, 1)
	return Promise.resolve(deletedUser[0])
}

// Дополнительные задания
exports.getUsersByAge = age => {
	const result = users.filter(user => user.age > parseInt(age))
	return Promise.resolve(result)
}

exports.getUsersByEmailDomain = domain => {
	const result = users.filter(user => user.email.endsWith(`@${domain}`))
	return Promise.resolve(result)
}
