var messageApp = new MessageApp("/\///json/\//messages.json")
import MessageApp from './controller'

function getAll(){
  return new Promise((resolve, reject) => {
    var result = messageApp.getAll()
    if (result !== []) {
      resolve(result)
    } else {
      reject(result)
    }
  })
}
function post(content){
  return new Promise((resolve, reject) => {
    var message = messageApp.post(content)
    if (message !== []) {
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
