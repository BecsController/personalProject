const request = require('supertest')

const env = require('../test-environment')
const Db = require('../../../server/db/user')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('grab users from db works', () => {
  return Db.getUsers(testDb)
    .then(users => {
      expect(users.length).toBe(4)
      expect(users[0].hasOwnProperty('name')).toBeTruthy()
    })
})

test('getAuthUsers from db returns auth info', () => {
  return Db.getAuthUsers(testDb)
    .then(authUsers => {
    expect(authUsers.length).toBe(4)
    expect(authUsers[0].hasOwnProperty('id')).toBeTruthy()
  })
})

test('can find user by id', () => {
  let id = 3
  return Db.getUser(id, testDb)
    .then(user => {
      expect(user.id).toBe(id)
      expect(user.hasOwnProperty('email')).toBeTruthy()
  })
})

test('createUser can add new user', () => {
  let newUser = {
    name: 'Sally',
    password: 'Sally'
  }
  return Db.createUser(newUser, testDb)
    .then(newUser => {
    console.log(newUser)
    expect(newUser.length).toBe(2)
  })
})

test('UserExists can find a user', () => {
  let name = 'Sally'
  return Db.getUserByName(name, testDb)
    .then(user => {
      expect(user.length).toBe(3)
      expect(user.hasOwnProperty('name')).toBeTruthy()
  })
})
