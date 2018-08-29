const request = require('supertest')

jest.mock('../../../server/db/user', () => ({
  getUsers: () => Promise.resolve([
    {id: 1, username: 'Sam'},
    {id: 2, username: 'Holly'}
  ]),
  getUser: () => Promise.resolve([
    {id: 6, username: 'Dafnis'}
  ]),
  createUser: () => Promise.resolve([
    {username: 'Fenix', password: 'FenFen'}
  ]),
  updateUser: () => Promise.resolve([]),

  getAuthUsers: () => Promise.resolve([
    {id: 3, password: 'thingOne', username: 'thingTwo'},
    {id: 4, password: 'hey', username: 'someone'}
  ])
}))

const server = require('../../../server/server')

test('Get all users', () => {
  return request(server)
    .get('/api/users')
    .expect(200)
    .then(res => {
      expect(res.body.users.length).toBe(2)
      expect(res.body.users[0].id).toBe(1)
      expect(res.body.users[1].username).toBe('Holly')
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('Get all users from auth db', () => {
  return request(server)
    .get('/api/auth')
    .expect(200)
    .then(res => {
      expect(res.body.auth.length).toBe(2)
      expect(res.body.auth[0].id).toBe(3)
      expect(res.body.auth[1].username).toBe('someone')
      expect(res.body.auth[0]).toHaveProperty('password')
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('Get single user', () => {
  const id = 6
  return request(server)
    .get(`/api/users/${id}`)
    .expect(200)
    .then(res => {
      expect(res.body[0].username).toBe('Dafnis')
      expect(res.body.length).toBe(1)
      expect(res.body[0].id).toBe(6)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('Update user information', () => {
  const fakeUpdatedUser = {
    username: 'Sofie',
    email: 'Sofie@Sof.com',
    avatar: null,
    saved_stories: null
  }
  const id = 2
  return request(server)
    .put(`api/users/${id}`)
    .send(fakeUpdatedUser)
    .expect(204)
    .then(res => {
      console.log(res)
      expect(res).toBe(1)
    })
})

test('create a user', () => {
  return request(server)
    .post('/api/users')
    .send({fakeUser: {name: 'Fenix', password: 'FenFen'}})
    .expect(202)
    .then(res => {
      expect(res.body).toBeTruthy()
      expect(res.body[0].username).toBe('Fenix')
      expect(res.body.length).toBe(1)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
