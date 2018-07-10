import React, { Component } from 'react';

const ReadTodo = ({text, handleChange, handleDelete}) => {
    return (
      <div className="readTodo">
        {/* <div class="readText"> */}
            <p>{text}</p>
        {/* </div> */}
        <div className="readBtns">
            <button onClick={handleChange}>Edit</button>
            <button onClick={() => handleDelete(text)}>Delete</button>
        </div>
      </div>
    )
  }

  export default ReadTodo;