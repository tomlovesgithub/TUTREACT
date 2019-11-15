import request from "supertest"
import { expect } from "chai";
const MessageApp = require("../app.js")
let data;

describe("message API endpoint tests", function(){
  it("posts a message", function(done) {
    data = {
      content: "hi world"
    };
    const res = request(MessageApp)
    .post("/message")
    .send(data)
    .set("Accept", "application/json")
    res.expect(200)
    .end(function(err, res) {
      if (err) {
        return done(err)
      }
      expect(res.body.length).to.equal(1)
      done()
    })
  })
  it("gets all messages", function(done) {
    const res = request(MessageApp)
    .get("/")
    res.expect(200)
    .end(function(err, res) {
      if (err) {
        return done(err)
      }
      expect(res.body.length).to.equal(1)
      done()
    })
    it("deletes a message", function(done) {
      data = {
        id: 0
      };
      const res = request(MessageApp)
      .delete("/delete/0")
      .send(data)
      .set("Accept", "application/json")
      res.expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err)
        }
        expect(res.body.length).to.equal(1)
        done()
      })
    })
  })
})
