import React, {Component} from 'react';
import TextInput from './textInput.js'

class MessageList extends Component {
  constructor(){
    super()
    this.state = {
      editMode: {
        id: null,
        content: null
      }
    }
  }

  sendUpdate(id, content){
    this.props.sendUpdate(id, content)
    this.editModeOn({id:null,content:null})
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
    let {loaded, messages} = this.props
    if (!loaded) {
      return(<ul id='message_list'>loading...</ul>)
    }
    if (messages.length > 0){
      return(
        <ul id='message_list'>
          {messages.map(message=>{

            let contentBox = message.content
            let updateButton = (<button
              id="update"
              onClick={()=>this.editModeOn(message)}>
              update
            </button>)

            if (this.state.editMode.id === message.id){
              contentBox = (<TextInput value={this.state.editMode.content}/>)
              updateButton = (<button
                id='edit'
                onClick={()=>this.sendUpdate(this.state.editMode.id, this.state.editMode.content)}>
                edit
              </button>)
            };

            return (<li
              style={{border: "1px solid black", width: 'fit-content'}}
              key={message.id}>
              {contentBox}
              <br/>
              {message.date}
              <br/>

              <button
                id='delete'
                onClick={()=>this.props.handleDelete(message.id)}>
                delete
              </button>

              {updateButton}

            </li>)
          })}
        </ul>)
      } else {
        return(<div>No Messages</div>)
      }
    }

  };


  export default MessageList
