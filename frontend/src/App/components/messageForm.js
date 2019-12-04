import React from 'react';
import TextInput from './textInput.js'

class MessageForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitMessage(this.refs.inputRef.state.value)
  };

  render(){
    return (
      <ul>
        <form
          onSubmit={(e)=>this.handleSubmit(e)}
          ref='formRef'>
          <TextInput
          ref="inputRef"
          id="message_box"
          />
          <br/>
          <button
            type="submit"
            name="Submit"
            id="submit">
            Submit
          </button>
        </form>
      </ul>
    );
  }
}

export default MessageForm;
