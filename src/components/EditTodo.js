import React, { Component } from 'react';

class EditTodo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
              <input 
                  className="editTodo"
                  defaultValue={this.props.text}
                  ref={input => this.editInput = input}
                />
              <button onClick={(input, todo) => {
                  this.props.handleChange();
                  this.props.handleSave(this.editInput.value, this.props.text);
              }}>
                Save
              </button>
              <button onClick={this.props.handleChange}>Cancel</button>
            </div>
        )
    }        
}
  

export default EditTodo;
  