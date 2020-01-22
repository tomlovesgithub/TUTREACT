import React from 'react';

class MessageForm extends React.Component {
  constructor(){
    super()
    this.state = {
      currentMessage: ''
    }
  }

  handleChange(change){
    this.setState({
      currentMessage: change
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitMessage(this.state.currentMessage)
    this.handleChange('')
  };

  render(){
    return (
      <div>
        <form
          ref='formRef'
          onSubmit={(e)=>this.handleSubmit(e)}>
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
      </div>
    );
  }
}

export default MessageForm;
