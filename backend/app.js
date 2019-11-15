const express = require('express')
const app = express()

app.use(require("./lib/routes.js"))

app.listen(3000, function(){
  console.log("Connected");
})

module.exports = app;
