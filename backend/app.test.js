import { expect } from "chai";
// var expect = require("chai").expect;
import MessageApp from './app.js'

describe("app", function() {
  var testApp = new MessageApp
  it("app has messages", function() {
    expect(testApp.messages).to.deep.equal([]);
  })
})
