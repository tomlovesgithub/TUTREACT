class MessageApp {
  constructor() {
    this.messages = []
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
}

export default MessageApp
