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
  updateUser: () => Promise.resolve([
    {id: 2, name: 'Sofie'}
  ]),
  getAuthUsers: () => Promise.resolve([
    {id: 3, password: 'thingOne', name: 'thingTwo'},
    {id: 4, password: 'hey', name: 'someone'}
  ])
}))

jest.mock('../../server/db/stories', () => ({
  getStories: () => Promise.resolve([
    {id: 1, title: 'School'},
    {id: 2, title: 'The Mall'},
    {id: 3, title: 'Wash hands'}
  ]),
  getStory: () => Promise.resolve([
    {id: 2, title: 'Wash hands', user_id: 2, genre: 'hygiene'}
  ]),
  getPages: () => Promise.resolve([
    {id: 1, background: 'chair', population: 'parents'},
    {id: 2, background: 'classroom', population: 'teacher'}
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

test('Get all users from auth db', () => {
  return request(server)
    .get('/api/auth')
    .expect(200)
    .then(res => {
      expect(res.body.auth.length).toBe(2)
      expect(res.body.auth[0].id).toBe(3)
      expect(res.body.auth[1].name).toBe('someone')
      expect(res.body.auth[0]).toHaveProperty('password')
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

test('Update user information', () => {
  const name = 'Sofie'
  const id = 2
  return request(server)
    .get('api/users/:id')
    .expect(202)
    .then(res => {
      console.log(res.body)
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

test('Get single story', () => {
  const id = 2
  return request(server)
    .get('/api/stories/:id')
    .expect(200)
    .then(res => {
      expect(res.body[0].title).toBe('Wash hands')
      expect(res.body.length).toBe(1)
      expect(res.body[0].id).toBe(2)
      expect(res.body[0].genre).toBe('hygiene')
      expect(res.body[0].user_id).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('Get pages returns all pages', () => {
  return request(server)
    .get('/api/pages')
    .expect(200)
    .then(res => {
      expect(res.body.pages.length).toBe(2)
      expect(res.body.pages[0].background).toBe('chair')
      expect(res.body.pages[1].population).toBe('teacher')
      expect(res.body.pages[1].id).toBe(2)
  })
  .catch(err => {
    expect(err).toBeFalsy()
  })
})
