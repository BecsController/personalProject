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
      expect(users[0].hasOwnProperty('username')).toBeTruthy()
      expect(users[2].email).toBe('FenFen@ix.com')
    })
})

test('getAuthUsers from db returns auth info', () => {
  return Db.getAuthUsers(testDb)
    .then(authUsers => {
    expect(authUsers.length).toBe(4)
    expect(authUsers[0].hasOwnProperty('id')).toBeTruthy()
    expect(authUsers[3].hasOwnProperty('password')).toBeTruthy()
    expect(authUsers[2].password).toBe('Fuego')
  })
})

test('can find user by id', () => {
  let id = 3
  return Db.getUser(id, testDb)
    .then(user => {
      expect(user.id).toBe(id)
      expect(user.hasOwnProperty('email')).toBeTruthy()
      expect(user.username).toBe('FenFen')
  })
})

test('createUser can add new user', () => {
  let newUser = {
    username: 'Sally',
    email: 'Sally@sally.com',
    avatar: null,
    password: 'Sally'
  }
  return Db.createUser(newUser, testDb)
    .then(res => {
    console.log(res)
    expect(res.length).toBe(1)
  })
})

test('UserExists can find a user', () => {
  let name = 'Sally'
  return Db.getUserByName(username, testDb)
    .then(user => {
      console.log(user)
      expect(user.length).toBe(3)
      expect(user.hasOwnProperty('username')).toBeTruthy()
  })
})
