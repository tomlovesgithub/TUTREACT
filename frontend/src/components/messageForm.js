import React from 'react';

class MessageForm extends React.Component {
  constructor(){
    super()
    this.state = {
      currentMessage: null
    }
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  handleChange(e){
    this.setState({
      currentMessage: e.target.value
    })
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
