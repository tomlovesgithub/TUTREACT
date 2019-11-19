import MessageApp from './controller'
var messageApp = new MessageApp("/\///json/\//messages.json")

function getAll(){
  return new Promise((resolve, reject) => {
    var result = messageApp.getAll()
    if (result !== "No messages in database") {
      resolve(result)
    } else {
      reject(result)
    }
  })
}
function post(content){
  return new Promise((resolve, reject) => {
    var message = messageApp.post(content)
    if (message !== "You can't post an empty message") {
      resolve(message)
    } else {
      reject(message)
    }
  })
}

function deleteMessage(id){
  return new Promise((resolve, reject) => {
    var result = messageApp.delete(id)
    if (result !== []) {
      resolve(result)
    } else {
      reject(result)
    }
  })
}

function updateMessage(id, content){
  return new Promise((resolve, reject) => {
    var result = messageApp.update(id, content)
    if (result !== []) {
      resolve(result)
    } else {
      reject(result)
    }
  })
}


module.exports = {
  getAll,
  post,
  deleteMessage,
  updateMessage
}
