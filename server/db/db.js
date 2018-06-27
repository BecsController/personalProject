const db = require('./connection')

function getUsers () {
  return db('users').select()
}

module.exports = {
  getusers,
}
