import fs from "fs"
import path from 'path'

class MessageApp {
  constructor(filepath) {
    this.filepath = filepath
    this.messages = filepath ? this.readFromJson() : []
    // console.log(this.messages);
  }

  post(content) {
    this.messages.push({
      content: content,
      date: new Date(),
      id: this.messages.length
    })
  }
  get(id) {
    return this.messages.filter(message => message.id == id )[0]
  }
  update(id,update){
    this.messages[id].content = update
    return this.messages
  }
  delete(id) {
    this.messages = this.messages.filter(message => message.id != id)
  }
  readFromJson(){
    return JSON.parse(fs.readFileSync(__dirname+path.normalize(this.filepath), "utf8", (err, data) => {}))
  }
  writeToJson(){
    console.log(this.messages);
    // fs.writeFile('message.txt', this.messages, (err) => {
    //   if (err) throw err;
    //   console.log('The file has been saved!');
    // });
  }
}

export default MessageApp
