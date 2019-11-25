import React from 'react';

class MessageForm extends React.Component {
  constructor(){
    super()
    this.state = {
      currentMessage: ''
    }
  }

<<<<<<< HEAD
  componentDidUpdate(){
  }

=======
>>>>>>> e0af37a9ab3e42782abaf0a243a88505dbb140ff
  handleChange(e){
    this.setState({
      currentMessage: e.target.value
    })
  }

<<<<<<< HEAD
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitMessage(this.state.currentMessage)
    this.handleChange({target: {value: ''}})
=======
  handleSubmit = () => {
    this.props.submitMessage(this.state.currentMessage)
>>>>>>> e0af37a9ab3e42782abaf0a243a88505dbb140ff
  }

  render(){
    return (
      <div>
<<<<<<< HEAD
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
=======
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
>>>>>>> e0af37a9ab3e42782abaf0a243a88505dbb140ff
      </div>
    );
  }
}

export default MessageForm;
