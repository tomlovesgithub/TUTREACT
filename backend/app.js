import express from "express"
const app = express()
import bodyParser from "body-parser"

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(bodyParser.json());

app.use(require("./lib/routes.js"))

app.listen(3001, function(){
  console.log("Connected");
})

module.exports = app;
