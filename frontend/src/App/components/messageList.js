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

  sendUpdate(){
    this.props.sendUpdate(this.state.editMode.id, this.refs.updateBox.state.value)
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
              contentBox = (<TextInput
                ref='updateBox'
                value={this.state.editMode.content}/>)
              updateButton = (<button
                id='edit'
                onClick={()=>this.sendUpdate()}>
                edit
              </button>)
            };

            return (<li
              id='indv_message'
              key={message.id}>
              {contentBox}
              <br/>
              {new Date(message.date).toLocaleTimeString('en-UK')}
              <br/>
              {new Date(message.date).toLocaleDateString('en-UK')}
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
