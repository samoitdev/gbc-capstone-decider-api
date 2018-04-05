let express = require('express')
let morgan = require('morgan')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')




let app = express()

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

// Routes
app.use('/users', require('./src/routes/users'))

// http://localhost:3000/users/signin

// Start server
let port = process.env.PORT || '3000'
app.listen(port)
console.log(`Server is listening on port ${port}`)