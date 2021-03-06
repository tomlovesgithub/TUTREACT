import React, {Component} from 'react';
// import TextInput from './textInput.js'

class MessageList extends Component {
  constructor(){
    super()
    this.state = {
      editMode: {
        id: null,
        content: null}
      }
    }

    sendUpdate(){
      this.props.sendUpdate(this.state.editMode.id, this.refs.updateBox.value)
      this.toggleUpdate({id:null,content:null})
    }

    toggleUpdate(message){
      this.setState({
        editMode: {
          id: message.id,
          content: message.content
        }
      })
    }

    formatMessage(message){
      let content = message.content
      let updateButton = <button
      onClick={()=>this.toggleUpdate(message)}
      id='update'>
      update
      </button>
      if (message.id === this.state.editMode.id){
        content = (<textarea
          onChange={(e) => this.setState({editMode: {
            id: message.id,
            content: e.target.value
          }}
        )}
        value={this.state.editMode.content}
        ref='updateBox'
        id='updateBox'
        >
        </textarea>)
        updateButton = (<button
        onClick={()=>this.sendUpdate(message)}
        id='edit'>
        Send Update
        </button>)
      }
      return <li
      className='message'
      key={message.id}>
      {content}
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
      </li>
    }

    render(){
      if (!this.props.messages){
        return <div>no messages</div>
      }
      if (this.props.messages){
        return <div>
        <ul id='message_list'>
        {this.props.messages.map(message=>{
          return this.formatMessage(message)
        })}
        </ul>
        </div>
      }
    }

  };

  export default MessageList
