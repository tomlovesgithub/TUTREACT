import React, { Component } from 'react';
import MessageList from './components/messageList.js'
import ErrorHandler from './components/errorHandler.js'
import MessageForm from './components/messageForm.js'

import axios from 'axios';
const PORT = 'http://localhost:3001';

class MessageApp extends Component {
  constructor(){
    super()
    this.state = {
      messages: [],
      loaded: false,
      error: null
    }
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

  submitMessage = (data) => {
    axios.post(`${PORT}/message`, {
      content: data
    })
    .then((result)=>{
      this.setMessages(result.data)
      this.refs.messageFormRef.handleChange('')
    })
    .catch((err)=>{
      this.setError(err.message)
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
        this.setError(err.data)
        this.setLoaded(true)
      })
    }
  }

  render(){
    this.getAllMessages()
    return (
      <ul className="App">
      <MessageForm
      ref='messageFormRef'
      submitMessage={this.submitMessage}
      />
      <ErrorHandler
      error={this.state.error}
      />
      <MessageList
      loaded={this.state.loaded}
      messages={this.state.messages}
      />
      </ul>
    );
  }
}

export default MessageApp;
