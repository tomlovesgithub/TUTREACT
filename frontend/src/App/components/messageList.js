import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props){
    super(props)
    this.state = {
      editMode: 0
    }
  }

  editModeOn(message){
    this.setState({
      editMode: {
        id: message.id,
        content: message.content
      }
    })
  }

  render(){
    let result
    if (!this.props.messages){
      result = 'no messages'
    }
    if (this.props.messages){
      result = (
        <ul id='message_list'>
        {this.props.messages.map(message=>{
          return <li
          className='message'
          key={message.id}>
          {message.content}
          <br/>
          {message.date}
          <button
          id='delete'
          onClick={()=>this.props.handleDelete(message.id)}>
          delete
          </button>
          <button
          id='update'>
          update
          </button>
          </li>
        })}
        </ul>)
      }
      return (<div>{result}</div>)
    }
  };
  export default MessageList
