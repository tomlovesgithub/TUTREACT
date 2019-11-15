import {Router} from "express"
import MessageApp from './controller'
var messageApp = new MessageApp("/\///json/\//messages.json")
const router = Router()

router.get('/', async (req, res) => {
  return new Promise((resolve, reject) => {
    var result = messageApp.getAll()
    if (result !== []) {
      res.json(result)
    } else {
      res.status(404)
    }
  })
})

module.exports = router
