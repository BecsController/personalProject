const request = require('supertest')

jest.mock('../../server/db/db', () => ({
  getUsers: () => Promise.resolve([
    {id: 1, name: 'Sam'},
    {id: 2, name: 'Holly'}
  ]),
  getStories: () => Promise.resolve([
    {id: 1, title: 'School'},
    {id: 2, title: 'The Mall'},
    {id: 3, title: 'Wash hands'}
  ])
}))

const server = require('../../server/server')

test('GET /users', () => {
  return request(server)
    .get('/api/users')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('GET /stories', () => {
  return request(server)
    .get('/api/stories')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(3)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
