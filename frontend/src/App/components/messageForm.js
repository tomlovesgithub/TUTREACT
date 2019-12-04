import React from 'react';

class MessageForm extends React.Component {
  constructor(){
    super()
    this.state = {
      currentMessage: ''
    }
  }

  handleChange = (change) => {
    this.setState({
      currentMessage: change
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitMessage(this.state.currentMessage)
  };

  render(){
    return (
      <ul>
        <form
          onSubmit={(e)=>this.handleSubmit(e)}
          ref='formRef'>
          <textarea
            onChange={(e) => this.handleChange(e.target.value)}
            value={this.state.currentMessage}
            id='message_box'>
          </textarea>
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
