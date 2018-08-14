const token = require('../auth/token')

const router = require('express').Router()
const userDb = require('../db/user')
const storyDb = require('../db/stories')
const assocDb = require('../db/associations')



router.get('/users', (req, res) => {
  userDb.getUsers().then(users => {
    res.json({users})
  })
})

router.get('/auth', (req, res) => {
  userDb.getAuthUsers().then(auth => {
    res.json({auth})
  })
})

router.get('/users/:id', (req, res) => {
  let id = req.params.id
  userDb.getUser(id)
  .then(user => {
    res.json(user)
  })
})

router.put('/users/:id', (req, res) => {
  let id = req.params.id
  let user = req.body
  userDb.updateUser(id, user)
  .then(user => {
    res.json(user)
  })
})

router.get('/stories', (req, res) => {
  storyDb.getStories()
  .then((stories) => {
    res.json({stories})
  })
})

router.get('/stories/:id', (req, res) => {
  let id = req.params.id
  storyDb.getStory(id)
  .then(story => {
    res.json(story)
  })
})

router.get('/pages', (req, res) => {
  storyDb.getPages()
  .then(pages => {
    res.json({pages})
  })
})

router.post('/users', (req, res) => {
  userDb.createUser(req.body)
  .then((user) => {
    res.status(202).json(user)
  })
})

router.get('/associations', (req, res) => {
  assocDb.getAssociations().then(associations => {
    res.json(associations)
  })
})

router.post('/associations', (req, res) => {
  assocDb.createAssociations(req.body)
  .then(association => {
    res.status(202).json(association)
  })
})


module.exports = router
