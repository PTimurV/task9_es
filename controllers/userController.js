const userService = require('../services/userService')

exports.getAllUsers = async (req, res) => {
	try {
		const users = await userService.getAllUsers()
		res.json(users)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

exports.getUserById = async (req, res) => {
	try {
		const user = await userService.getUserById(req.params.id)
		if (!user) return res.status(404).send('User not found')
		res.json(user)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

exports.createUser = async (req, res) => {
	try {
		const { name, email, age } = req.body
		if (!name || !email || !age) {
			return res.status(400).send('Name, email, or age are required')
		}

		const newUser = await userService.createUser({ name, email, age })
		res.status(201).json(newUser)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

exports.updateUser = async (req, res) => {
	try {
		const { name, email, age } = req.body
		if (!name || !email || !age) {
			return res.status(400).send('Name, email, or age are required')
		}

		const updatedUser = await userService.updateUser(req.params.id, {
			name,
			email,
			age,
		})
		if (!updatedUser) return res.status(404).send('User not found')
	} catch (error) {
		res.status(500).send(error.message)
	}
}

exports.deleteUser = async (req, res) => {
	try {
		const user = await userService.deleteUser(req.params.id)
		if (!user) return res.status(404).send('User not found')

		res.status(204).send()
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Дополнительные задания
exports.getUsersByAge = async (req, res) => {
	try {
		const users = await userService.getUsersByAge(req.params.age)
		res.json(users)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

exports.getUsersByEmailDomain = async (req, res) => {
	try {
		const users = await userService.getUsersByEmailDomain(req.params.domain)
		res.json(users)
	} catch (error) {
		res.status(500).send(error.message)
	}
}
