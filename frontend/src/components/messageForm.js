import React from 'react';

class MessageForm extends React.Component {
  constructor(){
    super()
    this.state = {
      currentMessage: ''
    }
  }
  
  handleChange(e){
    this.setState({
      currentMessage: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitMessage(this.state.currentMessage)
    this.handleChange({target: {value: ''}})
  };

  render(){
    return (
      <div>
      <form
      onSubmit={(e)=>this.handleSubmit(e)}
      ref='formRef'>
      <textarea
      onChange={(e) => this.handleChange(e)}
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
