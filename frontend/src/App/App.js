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
      error: undefined
    }
  }

  componentDidMount(){
    this.getAllMessages()
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
      this.setError(null)
      this.refs.messageFormRef.handleChange('')
    })
    .catch((err)=>{
      this.setError(err.response);
    })
  }

  getAllMessages = () => {
    if (!this.state.loaded) {
      axios.get(`${PORT}/`)
      .then((result)=>{
        this.setMessages(result.data)
        this.setLoaded(true)
        this.setError(null)
      })
      .catch((err)=>{
        this.setError(err.response)
        this.setLoaded(true)
      })
    }
  }

  deleteMessage = (id) => {
    axios.delete(`${PORT}/delete/${id}`, {
      id: id
    })
    .then((result)=>{
      this.setMessages(result.data)
      this.setError(null)
      this.refs.messageFormRef.refs.inputRef.setState({value:""})
    })
    .catch((err)=>{
      this.setError(err.response);
    })
  }

  updateMessage = (id, content) => {
    axios.delete(`${PORT}/delete/${id}`, {
      content: content
    })
    .then((result)=>{
      this.setMessages(result.data)
      this.setError(null)
      this.refs.messageFormRef.handleChange('')
    })
    .catch((err)=>{
      this.setError(err.response.data);
    })
  }

  render(){
    return (
      <div className="App">
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
      handleDelete={this.deleteMessage}
      />
      </div>
    );
  }
}

export default MessageApp;
