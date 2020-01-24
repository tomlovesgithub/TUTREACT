import React from 'react';

class MessageForm extends React.Component {
  constructor(){
    super()
    this.state = {
      value: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitMessage(this.state.value)
    this.setState({value: ""})
  };

  render(){
    return (
      <form
        id="message_form"
        onSubmit={(e)=>this.handleSubmit(e)}
        ref='formRef'>
        <textarea
        ref='inputRef'
        onChange={(e) => this.setState({value: e.target.value})}
        value={this.state.value}
        id='message_box'
        >
        </textarea>
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
