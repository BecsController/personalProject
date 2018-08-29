import usersReducer from '../../client/reducers/users'
import storiesReducer from '../../client/reducers/stories'
import pagesReducer from '../../client/reducers/pages'

test('Reducer Initial State', () => {
  const expected = []

  const actual = usersReducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('RECEIVE_USERS', () => {
  const fakeUsers = [
    'Sam',
    'Harrison',
    'Emma'
  ]
  const expected = [...fakeUsers]

  const action = {
    type: 'RECEIVE_USERS',
    users: fakeUsers
  }

  const actual = usersReducer(undefined, action)

  expect(actual.length).toEqual(3)
  expect(actual).toEqual(expected)
})

test('RECEIVE_STORIES', () => {
  const fakeStories = [
    'School stuff',
    'Mall stuff'
  ]
  const expected = [...fakeStories]

  const action = {
    type: 'RECEIVE_STORIES',
    stories: fakeStories
  }

  const actual = storiesReducer(undefined, action)

  expect(actual.length).toEqual(2)
  expect(actual).toEqual(expected)
})

test('GET_PAGES', () => {
  const fakePages = [
    'Page One',
    'Page Two',
    'Page Three',
    'Page Four',
    'Page Five'
  ]
  const expected = [...fakePages]

  const action = {
    type: 'GET_PAGES',
    pages: fakePages
  }

  const actual = pagesReducer(undefined, action)

  expect(actual.length).toEqual(5)
  expect(actual).toEqual(expected)
})
