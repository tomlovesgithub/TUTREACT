import React, {Component} from 'react';

class MessageList extends Component {
  render(){
    let {loaded, messages} = this.props
    if (!loaded) {
      return(<ul id='message_list'>loading...</ul>)
    }
    if (messages.length > 0){
      return(
        <ul id='message_list'>
        {messages.map(message=>{
          return (
            <li
            style={{border: "1px solid black", width: 'fit-content'}}
            key={message.id}>
            {message.content}
            <br/>
            {message.date}
            <button id='delete'>delete</button>
            </li>)
          })}
        </ul>)
      }
      else {
      return(<div>No Messages</div>)
      }
    }

  };


  export default MessageList
