// this is an example of a basic router
//copy or rename this file, but dont build all your routes in here

const router = require('express').Router()
const db = require('../db/db')

router.get('/users', (req, res) => {
  db.getUsers().then(users => {
    res.json({users})
  })
})

router.get('/users/:id', (req, res) => {
  let id = req.params.id
  db.getUser(id)
  .then(user => {
    res.json(user)
  })
})

router.put('/users/:id', (req, res) => {
  let id = req.params.id
  let user = req.body
  db.updateUser(id, user)
  .then(user => {
    res.json(user)
  })
})

router.get('/stories', (req, res) => {
  db.getStories()
  .then((stories) => {
    res.json({stories})
  })
})

router.get('/stories/:id', (req, res) => {
  let id = req.params.id
  db.getStory(id)
    .then(story => {
      res.json(story)
    })
})

router.get('/pages', (req, res) => {
  db.getPages()
  .then(pages => {
    res.json({pages})
  })
})

router.post('/users', (req, res) => {
  let newUser = {
    name: req.body.name,
    email: req.body.email,
    avatar: req.body.avatar
  }
  db.createUser(newUser)
  .then(() => {
    res.sendStatus(200)
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
