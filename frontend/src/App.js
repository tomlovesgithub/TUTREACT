import React from 'react';
import './App.css';

class MessageApp extends React.Component {
  render(){

  return (
    <div className="App">
      <textarea
        id='message_box'>
        </textarea>
        <br/>
        <button
        type="button"
        name="Submit"
        id="submit">
        Submit
      </button>
      <ul
      id="message_list">
        Messages
      </ul>
    </div>
  );
}
}

export default MessageApp;
