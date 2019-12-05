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

  handleSuccess(messages){
    this.setMessages(messages)
    this.setError(null)
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
      this.handleSuccess(result.data);
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
        this.handleSuccess(result.data);
        this.setLoaded(true)
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
      this.handleSuccess(result.data);
    })
    .catch((err)=>{
      this.setError(err.response);
    })
  }

  updateMessage = (id, content) => {
    axios.put(`${PORT}/update/${id}`, {
      content: content
    })
    .then((result)=>{
      this.handleSuccess(result.data)
    })
    .catch((err)=>{
      this.setError(err.response);
    })
  }

  render(){
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
      handleDelete={this.deleteMessage}
      sendUpdate={this.updateMessage}
      />
      </div>
    );
  }
}

export default MessageApp;
