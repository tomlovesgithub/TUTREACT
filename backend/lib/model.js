import fs from "fs"
import path from 'path'
import helper from './helper.js'

class MessageApp {
  constructor(filepath) {
    this.filepath = filepath
    this.messages = filepath ? this.readFromJson() : []
  }

  post(content) {
    if (content) {
      this.messages.push({
        content: content,
        date: new Date(),
        id: helper.newId(this.messages)
      })
      this.writeToJson()
      return this.messages
    }
    else if (!content){
      return []
    }
  }

  get(id) {
    return this.messages.filter(message => message.id == id )[0]
  }

  getAll(){
    return this.messages
  }

  update(id,update){
    let index = this.messages.map(message => parseInt(message.id)).indexOf(parseInt(id))
    if (index >= 0) {
      this.messages[index].content = update
      this.writeToJson()
      return this.messages
    }
    else {
      return []
    }
  }

  delete(id) {
    let index = this.messages.map(message => parseInt(message.id)).indexOf(parseInt(id))
    if (index >= 0) {
      this.messages.splice(index, 1);
      this.writeToJson()
      return this.messages
    }
    else {
      return "Message not found in database"
    }
  }

  readFromJson(){
    var result = JSON.parse(fs.readFileSync(__dirname+path.normalize(this.filepath), "utf8", (err, data) => {
      if (err) throw err;
    }))
    return result
  }

  writeToJson(){
    if (this.filepath) {
      const jsonItem = JSON.stringify(this.messages)
      fs.writeFileSync(__dirname+path.normalize(this.filepath), jsonItem, (err) => {
        if (err) throw err;
      });
    }
  }
}

export default MessageApp
