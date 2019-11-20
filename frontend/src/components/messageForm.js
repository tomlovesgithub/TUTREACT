import React from 'react';

class MessageForm extends React.Component {
  render(){
    return (
      <div>
      <form>
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
      </form>
      </div>
    );
  }
}

export default MessageForm;
