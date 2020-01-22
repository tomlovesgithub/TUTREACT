import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props){
    super(props)
    this.state = {
      editMode: 0
    }
  }
  render(){
    if (this.props.messages){
      return(
        <ul id='message_list'>
          {this.props.messages.map(message=>{
            return <li
              className='message'
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
                <br/>
                <button
                  id='update'
                  onClick={()=>this.props.toggleEditMode(message.id)}
                  >update</button>
                </li>
              })}
            </ul>)
          }
          if (!this.props.messages){
            return (<div>no messages</div>)
          }
        }
      };
      export default MessageList
