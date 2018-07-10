import React, { Component } from 'react';

import EditTodo from './EditTodo';
import ReadTodo from './ReadTodo';

class TodoItem extends Component {
    constructor(props) {
      super(props);
      this.state = { editMode: false }
    }
    changeMode = () => {
      this.setState({ editMode: !this.state.editMode });
    }

    render() {
      return (
        <div>
          {(this.state.editMode) ? 
            <EditTodo handleChange={this.changeMode} {...this.props} /> : 
            <ReadTodo handleChange={this.changeMode} {...this.props} /> 
          }
        </div>
      )
    }
  }

  export default TodoItem;