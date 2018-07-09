import React, { Component } from 'react';

const EditTodo = (props) => {
    return (
      <div>
        <input 
          defaultValue={props.text}
          ref={input => this.editInput = input}
          />
        <button onClick={(input, todo) => {
            props.handleChange();
            props.handleSave(this.editInput.value, props.text);
        }}>
          Save
        </button>
        <button onClick={this.changeMode}>Cancel</button>
      </div>
    )
  }

export default EditTodo;
  