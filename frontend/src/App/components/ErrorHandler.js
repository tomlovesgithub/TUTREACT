import React, {Component} from 'react';

class ErrorHandler extends Component {
  render(){
    if (this.props.error) {
      return(<div id='error'>{this.props.error}</div>)
    }
      else {
      return(<div></div>)
      }
    }

  };


  export default ErrorHandler
