import React, { Component } from 'react';
import MessageList from './components/messageList.js'
import MessageForm from './components/messageForm.js'
import ErrorHandler from './components/errorHandler.js'

import axios from 'axios';
const PORT = 'http://localhost:3001';

class MessageApp extends Component {
  constructor(){
    super()
    this.state = {
      messages: [],
      loaded: false,
      error: undefined
    }
  }

  submitMessage = (data) => {
    axios.post(`${PORT}/message`, {
      content: data
    })
    .then((result)=>{
      this.setMessages(result.data)
    })
    .catch((err)=>{
      this.setError(err.response)
    })
  }

  setError(error){
    this.setState({
      error: error
    })
  }

  setMessages(messages){
    this.setState({
      messages: messages
    })
  }

  setLoaded(loaded){
    this.setState({
      loaded: loaded
    })
  }

  getAllMessages(){
    if (!this.state.loaded) {
      axios.get(`${PORT}/`)
      .then((result)=>{
        this.setMessages(result.data)
        this.setLoaded(true)
      })
      .catch((err)=>{
        this.setError(err.response)
        this.setLoaded(true)
      })
    }
  }

  render(){
    this.getAllMessages()
    return (
      <div className="App">
      <ErrorHandler
      error={this.state.error}
      />
      <MessageForm
      ref='messageFormRef'
      submitMessage={this.submitMessage}
      />
      <MessageList
      loaded={this.state.loaded}
      messages={this.state.messages}
      />
      </div>
    );
  }
}

export default MessageApp;
