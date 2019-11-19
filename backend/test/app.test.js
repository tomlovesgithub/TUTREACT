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
  })

  it("updates a message", function(done) {
    data = {
      content: "Hello World"
    }
    const res = request(MessageApp)
    .put('/update/0')
    .send(data)
    .set("Accept", "application/json")
    res.expect(200)
    .end(function(err, res) {
      if (err) {
        return done(err)
      }
      expect(res.body[0].content).to.equal("Hello World")
      done()
    })
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
      expect(res.body.length).to.equal(0)
      done()
    })
  })
})


describe("message api errors correctly", function(){
  it("posts a message errors", function(done) {
    data = {
      content: ""
    };
    const res = request(MessageApp)
    .post("/message")
    .send(data)
    .set("Accept", "application/json")
    res.expect(404)
    .end(function(err, res) {
      if (err) {
        return done(err)
      }
      expect(res.body.error).to.equal("You can't post an empty message")
      done()
    })
  })

  it("gets all errors", function(done) {
    const res = request(MessageApp)
    .get("/")
    res.expect(404)
    .end(function(err, res) {
      if (err) {
        return done(err)
      }
      expect(res.body.error).to.equal("No messages in database")
      done()
    })
  })

  it("can error after updating", function(done) {
    data = {
      content: "Hello World"
    }
    const res = request(MessageApp)
    .put('/update/0')
    .send(data)
    .set("Accept", "application/json")
    res.expect(404)
    .end(function(err, res) {
      if (err) {
        return done(err)
      }
      expect(res.body.error).to.equal("Message not found in database")
      done()
    })
  })

  it("deletes a message", function(done) {
    data = {
      id: 0
    };
    const res = request(MessageApp)
    .delete("/delete/0")
    .send(data)
    .set("Accept", "application/json")
    res.expect(404)
    .end(function(err, res) {
      if (err) {
        return done(err)
      }
      expect(res.body.error).to.equal("Message not found in database")
      done()
    })
  })
})
