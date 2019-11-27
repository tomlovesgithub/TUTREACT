import React, { Component } from 'react';
import MessageList from './components/messageList.js'
import MessageForm from './components/messageForm.js'

import axios from 'axios';
const PORT = 'http://localhost:3001';

class MessageApp extends Component {
  constructor(){
    super()
    this.state = {
      messages: [],
      loaded: false
    }
  }

  submitMessage = (data) => {
    axios.post(`${PORT}/message`, {
      content: data
    })
    .then((result)=>{
      if (this.state.messages.length >= 1 ) {
      this.setState({
        loaded: false,
        messages: [...this.state.messages, result]
      })
    } else {
      this.setState({
        loaded: false,
        messages: [result]
      })
    }
    })
  }

  getAllMessages(){
    if (!this.state.loaded) {
      axios.get(`${PORT}/`)
      .then((result)=>{
        this.setState({
          loaded: true,
          messages: result.data
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
      loaded={this.state.loaded}
      messages={this.state.messages}
      error={this.state.error}
      />
      </div>
    );
  }
}

export default MessageApp;
