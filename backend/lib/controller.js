import fs from "fs"
import path from 'path'

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
        id: this.messages.length
      })
      this.writeToJson()
      return this.messages
    }
    else if (!content){
      return "You can't post an empty message"
    }
  }

  get(id) {
    return this.messages.filter(message => message.id == id )[0]
  }

  getAll(){
    if (this.messages.length !== 0) {
      return this.messages
  }
    else {
      return "No messages in database"
    }
  }

  update(id,update){
    this.messages[id].content = update
    this.writeToJson()
    return this.messages
  }

  delete(id) {
    this.messages = this.messages.filter(message => message.id != id)
    this.writeToJson()
  }

  readFromJson(){
    return JSON.parse(fs.readFileSync(__dirname+path.normalize(this.filepath), "utf8", (err, data) => {
      if (err) throw err;
    })
  )}

  writeToJson(){
    if (this.filepath) {
      const jsonItem = JSON.stringify(this.messages)
      fs.writeFile(__dirname+path.normalize(this.filepath), jsonItem, (err) => {
        if (err) throw err;
      });
    }
  }
}

export default MessageApp
