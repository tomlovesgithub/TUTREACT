import React from 'react';

class MessageForm extends React.Component {
  render(){
    return (
      <div>
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
      </div>
    );
  }
}

export default MessageForm;
