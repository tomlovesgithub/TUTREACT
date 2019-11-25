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
<<<<<<< HEAD
      // submitMessage={}
=======
      submitMessage={this.submitMessage}
>>>>>>> e0af37a9ab3e42782abaf0a243a88505dbb140ff
      />
      <MessageList/>
      </div>
    );
  }
}

export default MessageApp;
