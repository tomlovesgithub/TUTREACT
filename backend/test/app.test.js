import request from "supertest"
import { expect } from "chai";
const MessageApp = require("../app.js")

describe("message API endpoint tests", function(){
  it("gets all messages", function(done) {
    const res = request(MessageApp)
    .get("/")
    res.expect([ { content: 'Hi', date: '2019-11-15T11:46:58.616Z', id: 0 } ])
    res.expect(200, done)
  })
})
