import React, {Component} from 'react';

class MessageList extends Component {
  render(){
    let {loaded, messages} = this.props
    if (!loaded) {
      return(<ul id='message_list'>loading...</ul>)
    }
    else {
      return(
        <ul id='message_list'>
        {messages.map(message=>{
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
