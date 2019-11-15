import { expect } from "chai";
import MessageApp from '../lib/controller.js'

describe("app", function() {
  var testApp = new MessageApp
  it("app has messages", function() {
    expect(testApp.messages).to.deep.equal([]);
  });
  it("app creates (post)", function() {
    testApp.post('hello world')
    expect(testApp.messages.length).to.equal(1)
  });
  it("message has content", function() {
    expect(testApp.messages[0].content).to.equal("hello world")
  });
  it("message has date", function() {
    expect(testApp.messages[0].date).not.to.equal(undefined)
  });
  it("message has id", function() {
    expect(testApp.messages[0].id).to.equal(0)
  });
  it("app reads (get)", function() {
    expect(testApp.get(0).content).to.equal("hello world")
  });
  it("app updates (update)", function() {
    testApp.update(0, "goodbye universe")
    expect(testApp.messages[0].content).to.equal('goodbye universe')
  });
  it("app deletes (delete)", function() {
    testApp.delete(0)
    expect(testApp.messages.length).to.equal(0)
  });

  it("reads from given filepath", function() {
    var testFileWriteApp = new MessageApp("/\///json/\//testMessages.json")
    expect(testFileWriteApp.messages.length).to.equal(0)
    testFileWriteApp.post("Hi")
    expect(testFileWriteApp.messages.length).to.equal(1)
  });

  it("writes to given filepath", function() {
    var testFileReadApp = new MessageApp("/\///json/\//testMessages.json")
    expect(testFileReadApp.messages.length).to.equal(1)
    testFileReadApp.delete(0)
    expect(testFileReadApp.messages.length).to.equal(0)
});
})