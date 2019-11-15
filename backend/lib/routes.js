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
  // console.log(req);
  await messageApp.post(req.body.content)
  .then((messages) => {
    res.json(messages)
  })
  .catch((err) => res.status(404).json({
    error: err.message
  }))
})

module.exports = router
