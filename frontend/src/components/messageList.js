import React, {Component} from 'react';

class MessageList extends Component {
  render(){
    if (!this.props.loaded) {
      return(<ul id='message_list'>loading...</ul>)
    }
    else {
      return(
        <ul id='message_list'>
        {this.props.messages.map(message=>{
          return <li
          style={{border: "1px solid black"}}
          key={message.id}>
            {message.content}
            <br/>
            {message.date}
            </li>
          })}
          </ul>)
        }
      }

    };


export default MessageList
