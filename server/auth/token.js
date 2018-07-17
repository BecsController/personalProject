const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')
var {compare} = require('./hash')

const db = require('../db/db')

module.exports = {
  issue,
  decode,
  createToken
}

function issue (req, res) {
  db.getUserByName(req.body.name)
    .then(user => {
      if (!user) return res.status(403).json({message: 'User does not exist'})
    compare(req.body.password, user.password, (err, match) => {
      if (err) res.status(500).json({message: err.message})
      else if (!match) res.status(400).json({message: 'Password is incorrect'})
      else {
        var token = createToken(user, process.env.JWT_SECRET)
        res.json({
          message: 'Authentication successful',
          token
        })
      }
    })
  })
}

function createToken (user, secret) {
console.log('whaaaaaat?', secret);
  return jwt.sign({
    id: user.id,
    username: user.name
  }, secret, {
    expiresIn: '24h'
  })
}

function getSecret(req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}
