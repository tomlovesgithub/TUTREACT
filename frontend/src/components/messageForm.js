import React from 'react';

class MessageForm extends React.Component {
  constructor(){
    super()
    this.state = {
      currentMessage: null
    }
  }

  handleChange(e){
    this.setState({
      currentMessage: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.submitMessage(this.state.currentMessage)
  }

  render(){
    return (
      <div>
        <form
          ref='formRef'>
          <textarea
            onChange={(e) => this.handleChange(e)}
            id='message_box'>
          </textarea>
          <br/>
          <button
            onClick={this.handleSubmit}
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
