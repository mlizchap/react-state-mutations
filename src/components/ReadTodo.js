import React, { Component } from 'react';

const ReadTodo = (props) => {
    return (
      <div>
        <p>{props.text}</p>
        <button onClick={props.handleChange}>Edit</button>
        <button onClick={() => props.handleDelete(props.text)}>Delete</button>
      </div>
    )
  }

  export default ReadTodo;