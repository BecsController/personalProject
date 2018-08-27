const request = require('supertest')

jest.mock('../../server/db/user', () => ({
  getUsers: () => Promise.resolve([
    {id: 1, name: 'Sam'},
    {id: 2, name: 'Holly'}
  ]),
  getUser: () => Promise.resolve([
    {id: 6, name: 'Dafnis'}
  ]),
  createUser: () => Promise.resolve([
    {name: 'Fenix', password: 'FenFen'}
  ]),
}))

jest.mock('../../server/db/stories', () => ({
  getStories: () => Promise.resolve([
    {id: 1, title: 'School'},
    {id: 2, title: 'The Mall'},
    {id: 3, title: 'Wash hands'}
  ])
}))

const server = require('../../server/server')

test('Get all users', () => {
  return request(server)
    .get('/api/users')
    .expect(200)
    .then(res => {
      expect(res.body.users.length).toBe(2)
      expect(res.body.users[0].id).toBe(1)
      expect(res.body.users[1].name).toBe('Holly')
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('Get single user', () => {
  const id = 6
  return request(server)
    .get('/api/users/:id')
    .expect(200)
    .then(res => {
      expect(res.body[0].name).toBe('Dafnis')
      expect(res.body.length).toBe(1)
      expect(res.body[0].id).toBe(6)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('create a user', () => {
  return request(server)
    .post('/api/users')
    .send({fakeUser: {name: 'Fenix', password: 'FenFen'}})
    .expect(202)
    .then(res => {
      console.log(res.body)
      expect(res.body).toBeTruthy()
      expect(res.body[0].name).toBe('Fenix')
      expect(res.body.length).toBe(1)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('Get all stories', () => {
  return request(server)
    .get('/api/stories')
    .expect(200)
    .then(res => {
      expect(res.body.stories.length).toBe(3)
      expect(res.body.stories[2].title).toBe('Wash hands')
      expect(res.body.stories[1]).toHaveProperty('title')
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
