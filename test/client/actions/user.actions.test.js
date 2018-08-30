import {receiveUsers, getUsers, addUser} from '../../../client/actions/users'
import nock from 'nock'

test('Receive users action creator', () => {
  const fakeUsers = [
    'Sam',
    'Harrison',
    'Sally'
  ]

  const expected = {
    type: 'RECEIVE_USERS',
    users: fakeUsers
  }

  const actual = receiveUsers(fakeUsers)

  expect(actual.users.length).toBe(3)
  expect(actual).toEqual(expected)
})

test('Add users action creator adds another user', () => {
  const newFakeUser = [
    'John'
  ]

  const expected = {
    type: 'ADD_USER',
    user: newFakeUser
  }

  const actual = addUser(newFakeUser)

  expect(actual.user.length).toBe(1)
  expect(actual).toEqual(expected)
})

test('getUsers will dispatch an action on success', () => {
  const fakeUsers = [
    'Sam',
    'Harrison',
    'Sally',
    'Carly'
  ]
  const scope = nock('http://localhost:80')
  .get('/api/users')
  .reply(200, fakeUsers);

  const expectedAction = {
    type: 'RECEIVE_USERS',
    users: fakeUsers
  }

  const dispatch = jest.fn()
  .mockImplementationOnce(action => {
    expect(action).toEqual(expectedAction)
    scope.done()
  })

  getUsers()(dispatch)

})

test('getUsers error', () => {
  const scope = nock('http://localhost:80')
  .get('/api/users')
  .reply(404);

  const actual = getUsers()()
  expect(actual).toBe(undefined)
})
