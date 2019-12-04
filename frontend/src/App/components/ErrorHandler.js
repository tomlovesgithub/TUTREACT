import React, {Component} from 'react';

class ErrorHandler extends Component {
  render(){
    let result;
    if (this.props.error) {
      result = "Error: "+this.props.error.data
    }
    return(<div id='error'>{result}</div>)
  }
};


export default ErrorHandler
