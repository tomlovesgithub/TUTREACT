const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(
    {
      val: 'Hello World'
    })
})

app.listen(3000, function(){
  console.log("Connected");
})

module.exports = app;
