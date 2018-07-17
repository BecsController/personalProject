const conn = require('./connection')
const hash = require('../auth/hash')

function getUsers(testDb) {
  const db = testDb || conn
  return db('users').select()
}

function getAuthUsers(testDb) {
  const db = testDb || conn
  return db('userAuth').select()
}

function createUser(newUser, testDb) {
  return new Promise(function(resolve, reject) {
    const db = testDb || conn
    const {name, password} = newUser

    hash.generate(password, (err, hash) => {
      let authInfo = {
        password: hash,
        name,
      }
      delete newUser.password
      return db('users')
      .insert(newUser)
      .then((id) => {
        return db('userAuth')
        .insert(authInfo)
        .then(() => getUser(id[0]))
        .then(user => resolve(user))
      })
    })

  });
}

function userExists (name, testDb) {
  const db = testDb || conn
  return db('users')
    .where('name', name)
    .first()
}

function getUserByName (name, testDb) {
  const db = testDb || conn
  return db('userAuth').select()
  .where('name', name).first()
}

function getStories (testDb) {
  const db = testDb || conn
  return db('stories').select()
}

function getStory (id, testDb) {
  const db = testDb || conn
  return db('stories').select().where({id}).first()
}

function getPages (testDb) {
  const db = testDb || conn
  return db('pages').select()
}

function getUser(id, testDb) {
  const db = testDb || conn
  return db('users').select().where({id}).first()
}

function updateUser(id, updatedInfo, testDb) {
  const db = testDb || conn
  return db('users')
  .where('id', id)
  .update(updatedInfo)
}


module.exports = {
  createUser,
  getUsers,
  getUser,
  getAuthUsers,
  updateUser,
  getStories,
  getStory,
  getPages,
  userExists,
  getUserByName
}
