const path = require('path')
const express = require('express')
const passport = require('passport')
const authRoutes = require('./routes/auth')

const bodyParser = require('body-parser')
const cors = require('cors')

const server = express()
server.use(passport.initialize())
server.use(cors('*'))

server.use(bodyParser.json({limit: 500000}))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/auth', authRoutes)
server.use('/api', require('./routes/routes'))

module.exports = server
