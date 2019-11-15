const express = require('express')
const app = express()
import MessageApp from './lib/controller'
var messageApp = new MessageApp("/\///json/\//messages.json")

app.get('/', async (req, res) => {
  return new Promise((resolve, reject) => {
    var result = messageApp.getAll()
    if (result !== []) {
      res.json(result)
    } else {
      res.status(404)
    }
  })
})

app.listen(3000, function(){
  console.log("Connected");
})

module.exports = app;
