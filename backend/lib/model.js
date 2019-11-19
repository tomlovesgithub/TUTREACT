import MessageApp from './controller'
var messageApp = new MessageApp("/\///json/\//messages.json")

function getAll(){
  return new Promise((resolve, reject) => {
    var result = messageApp.getAll()
    if (result.length !== 0) {
      resolve(result)
    } else {
      reject("No messages in database")
    }
  })
}
function post(content){
  return new Promise((resolve, reject) => {
    var message = messageApp.post(content)
    if (message.length !== 0) {
      resolve(message)
    } else {
      reject("You can't post an empty message")
    }
  })
}

function deleteMessage(id){
  return new Promise((resolve, reject) => {
    var result = messageApp.delete(id)
    if (result !== 'Message not found in database') {
      resolve(result)
    } else {
      reject(result)
    }
  })
}

function updateMessage(id, content){
  return new Promise((resolve, reject) => {
    var result = messageApp.update(id, content)
    if (result.length !== 0) {
      resolve(result)
    } else {
      reject('Message not found in database')
    }
  })
}


module.exports = {
  getAll,
  post,
  deleteMessage,
  updateMessage
}
