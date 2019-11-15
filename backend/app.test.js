import request from "supertest"
import { expect } from "chai";
const MessageApp = require("./app.js")

describe("Hello World test", function(){
  it("first test", function(done) {
    const res = request(MessageApp)
    .get("/")
    res.expect({val: "Hello World"})
    res.expect(200, done)
  })
})
