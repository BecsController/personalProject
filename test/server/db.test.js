const request = require('supertest')

const env = require('./test-environment')
const Db = require('../../server/db/db')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

// Tests

test('grab users from db works', () => {
  return Db.getUsers(testDb)
    .then(users => {
      expect(users.length).toBe(4)
      expect(users[0].hasOwnProperty('name')).toBeTruthy()
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

test('can get stories from db', () => {
    return Db.getStories(testDb)
      .then(stories => {
        expect(stories.length).toBe(3)
        expect(stories.hasOwnProperty('title')).toBeTruthy()
  })
})
