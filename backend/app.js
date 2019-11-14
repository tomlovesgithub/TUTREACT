class MessageApp {
  constructor() {
    this.messages = []
  }

  post(content) {
    this.messages.push({
      content: content,
      date: new Date(),
      id: this.messages.length + 1
    })
  }
}

export default MessageApp
