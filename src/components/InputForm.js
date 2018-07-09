import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputVal: ''
      }
    }
    render() {
      return (
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleSubmit(this.state.inputVal);
          this.setState({inputVal: ''})
        }}>
          <input 
            type="text" 
            value={this.state.inputVal}
            onChange={(e) => this.setState({inputVal: e.target.value})}
          />
          <input 
            type="submit" 
            value="submit" />
        </form>
      )
    }
  }

  
export default InputForm;