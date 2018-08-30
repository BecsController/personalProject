import {
  receiveStories,
  receivePages,
  getStories,
  getPages,
  getStoryById,
  receiveStory
} from '../../../client/actions/stories'
import nock from 'nock'

test('Receive stories action creator', () => {
  const fakeStories = [
    'About school',
    'About the mall'
  ]

  const expected = {
    type: 'RECEIVE_STORIES',
    stories: fakeStories
  }

  const actual = receiveStories(fakeStories)

  expect(actual.stories.length).toBe(2)
  expect(actual).toEqual(expected)
})

test('Receive story action creator', () => {
  const fakeStory = [
    'Sola'
  ]

  const expected = {
    type: 'RECEIVE_STORY',
    story: fakeStory
  }

  const actual = receiveStory(fakeStory)

  expect(actual.story.length).toBe(1)
  expect(actual).toEqual(expected)
})

test('Receive pages action creator', () => {
  const fakePages = [
    'One',
    'Two'
  ]

  const expected = {
    type: 'RECEIVE_PAGES',
    pages: fakePages
  }

  const actual = receivePages(fakePages)

  expect(actual.pages.length).toBe(2)
  expect(actual).toEqual(expected)
})

test('getStories will dispatch an action on success', () => {
  const fakeStories = [
    'About school',
    'About the mall',
    'Washing hands'
  ]
  const scope = nock('http://localhost:80')
    .get('/api/stories')
    .reply(200, fakeStories);

  const expectedAction = {
    type: 'RECEIVE_STORIES',
    stories: fakeStories
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })
  getStories()(dispatch)

})

test('getStoryById will dispatch an action on success', () => {
  const fakeStory = [
    'Uno'
  ]

  const scope = nock('http://localhost:80')
    .get(`/api/story/1`)
    .reply(200, fakeStory);

  const expectedAction = {
    type: 'RECEIVE_STORY',
    story: fakeStory
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })

  getStoryById()(dispatch)
})

test('getStories error', () => {
  const scope = nock('http://localhost:80')
    .get('/api/stories')
    .reply(404);

  const actual = getStories()()
  expect(actual).toBe(undefined)
})

test('getPages will dispatch an action on success', () => {
  const fakePages = [
    'One',
    'Two',
    'Three'
  ]
  const scope = nock('http://localhost:80')
    .get('/api/pages')
    .reply(200, fakePages);

  const expectedAction = {
    type: 'RECEIVE_PAGES',
    pages: fakePages
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })
  getPages()(dispatch)

})
