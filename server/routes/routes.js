const token = require('../auth/token')

const router = require('express').Router()
const userDb = require('../db/user')
const storyDb = require('../db/stories')

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
//
// router.post('/updateUser/:id', (req, res) => {
//   let id = req.params.id
//   let updatedInfo = {
//     id: id,
//     name: req.body.name,
//     email: req.body.email,
//     avatar: req.body.avatar
//   }
//   db.updateUser(id, updatedInfo)
//   .then(() => {
//     res.redirect(`/users`)
//   })
// })
//
// router.get('/user/:id', (req, res) => {
//   let id = req.params.id
//   db.getUser(id).then(user => {
//     res.render('userpage', user)
//   })
// })

module.exports = router
