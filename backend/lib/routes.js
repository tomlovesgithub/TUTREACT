import {Router} from "express"
const messageApp = require("./model.js")
const router = Router()

router.get('/', async (req, res) => {
  await messageApp.getAll()
  .then((messages) => res.json(messages))
  .catch((err) => res.status(404).json({
    error: err.message
  }))
})

router.post('/message', async (req, res) => {
  await messageApp.post(req.body.content)
  .then((messages) => {
    res.json(messages)
  })
  .catch((err) => {
    res.status(404).json({
    error: err
  })
})
})

  router.delete('/delete/:id', async (req, res) => {
    await messageApp.deleteMessage(req.params.id)
    .then((messages) => {
      res.json(messages)
    })
    .catch((err) => {
      res.status(404).json({
      error: err.message
    })
  })
  })

  router.put('/update/:id', async (req, res) => {
    await messageApp.updateMessage(req.params.id, req.body.content)
    .then((messages) => {
      res.json(messages)
    })
    .catch((err) => res.status(404).json({
      error: err.message
    }))
  })

module.exports = router
