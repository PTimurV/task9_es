const express = require('express')
const app = express()
const usersRouter = require('./routes/users')
const carsRouter = require('./routes/cars')

app.use(express.json()) // Middleware для обработки JSON

app.use('/users', usersRouter)
app.use('/cars', carsRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
