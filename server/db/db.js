const db = require('./connection')
const hash = require('../auth/hash')

function getUsers() {
  return db('users').select()
}

function createUser(newUser, password) {
  const passwordHash = hash.generate(password)
  console.log(newUser, password)
  return db('users')
  .insert({username, hash: passwordHash})
}

function userExists (username, conn) {
  const db = conn || connection
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, conn) {
  const db = conn || connection
  return db('users').select()
    .where('username', username).first()
}

function getStories () {
  return db('stories').select()
}

function getStory (id) {
  return db('stories').select().where({id}).first()
}

function getPages () {
  return db('pages').select()
}

function getUser(id) {
  return db('users').select().where({id}).first()
}

function updateUser(id, updatedInfo) {
  return db('users')
  .where('id', id)
  .update(updatedInfo)
}


module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  getStories,
  getStory,
  getPages,
  userExists,
  getUserByName
}
