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

module.exports = {
  getAll
}
