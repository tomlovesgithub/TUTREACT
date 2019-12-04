import React from 'react';

class TextInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: this.props.value || ""
    }
  }
  render(){
    return (
        <textarea
        onChange={(e) => this.setState({value: e.target.value})}
        value={this.state.value}
        id={this.props.id}
        >
        </textarea>
      );
    }
  }

  export default TextInput;
