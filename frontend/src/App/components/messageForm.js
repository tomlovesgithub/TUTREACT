import React from 'react';
import TextInput from './textInput.js'

class MessageForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitMessage(this.refs.inputRef.state.value)
    this.refs.inputRef.setState({value: ""})
  };

  render(){
    return (
      <form
        id="message_form"
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
    );
  }
}

export default MessageForm;
