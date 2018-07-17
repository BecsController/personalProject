const express = require('express')

const {userExists, createUser} = require('../db/db')
const token = require('../auth/token')

const router = express.Router()

router.post('/register', register, token.issue)

function register (req, res, next) {
  userExists(req.body.name)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: 'User exists' })
      }
      createUser(req.body.name, req.body.email, req.body.avatar, req.body.password)
        .then(() => next())
    })
    .catch(err => {
      res.status(500).send({ message: "Server Error"})
    })
}

router.get('/name', token.decode, (req, res) => {
  res.json({
    name: req.user.name
  })
})

router.post('/login', token.issue)

module.exports = router
