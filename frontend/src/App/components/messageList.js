import React, {Component} from 'react';

class MessageList extends Component {
  render(){
      if (this.props.messages){
      return(
        <ul id='message_list'>
        {this.props.messages.map(message=>{
          return <li
          id='message'
          style={{border: "1px solid black"}}
          key={message.id}>
            {message.content}
            <br/>
            {message.date}
            <br/>
            <button
            id='delete'
            onClick={()=>this.props.handleDelete(message.id)}>
            >delete</button>
            </li>
          })}
          </ul>)
        } else {
          return (<div>no messages</div>)
       }
      }
};
export default MessageList
