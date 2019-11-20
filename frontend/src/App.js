import React from 'react';
import MessageList from './components/messageList.js'
import MessageForm from './components/messageForm.js'
import './App.css';
import axios from 'axios';
const PORT = 'http://localhost:3001';

class MessageApp extends React.Component {

  submitMessage = (data) => {
      axios.post(`${PORT}/message`, {
        content: data
      })
      .then((result)=>{
        console.log(result)
      })
    }

  render(){
    return (
      <div className="App">
      <MessageForm
      submitMessage={this.submitMessage}
      />
      <MessageList/>
      </div>
    );
  }
}

export default MessageApp;
