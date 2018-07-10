import React, { Component } from 'react';

const EditTodo = (props) => {
    return (
      <div>
        <input 
            className="editTodo"
            defaultValue={props.text}
            ref={input => this.editInput = input}
          />
        <button onClick={(input, todo) => {
            props.handleChange();
            props.handleSave(this.editInput.value, props.text);
        }}>
          Save
        </button>
        <button onClick={props.handleChange}>Cancel</button>
      </div>
    )
  }

export default EditTodo;
  