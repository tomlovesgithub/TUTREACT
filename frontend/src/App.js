import React, { Component } from 'react';
import MessageList from './components/messageList.js'
import MessageForm from './components/messageForm.js'

import axios from 'axios';
const PORT = 'http://localhost:3001';

class MessageApp extends Component {
  constructor(){
    super()
    this.state ={
      messages: []
    }
  }

  submitMessage = (data) => {
    axios.post(`${PORT}/message`, {
      content: data
    })
    .then((result)=>{
      this.setState({
        // loaded: false,
        messages: [...this.state.messages, data]
      })
    })
  }

  getAllMessages(){
    if (!this.state.loaded) {
      axios.get(`${PORT}/`)
      .then((result)=>{
        this.setState({
          // loaded: true,
          messages: result
        })
      })
    }
  }

  render(){
    this.getAllMessages()
    return (
      <div className="App">
      <MessageForm
      submitMessage={this.submitMessage}
      />
      <MessageList
      messages={this.state.messages}
      />
      </div>
    );
  }
}

export default MessageApp;
