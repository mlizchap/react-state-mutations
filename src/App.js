import React, { Component } from 'react';
import './App.css';

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

class Edit extends Component {
  render() {
    return (
      <div>
        <input />
        <button>Save</button>
        <button>Cancel</button>
      </div>
    )
  }
}

class EditTodo extends Component {
  render() {
    return <input />
  }
}

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false }
  }

  changeMode = () => {
    this.setState({ editMode: !this.state.editMode });
  }

  renderReadMode() {
    return (
      <div>
        <p>{this.props.text}</p>
        <button onClick={this.changeMode}>Edit</button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
  renderEditMode() {
    return (
      <div>
        <input 
          defaultValue={this.props.text}
          ref={input => this.editInput = input}
          />
        <button onClick={(input) => this.props.handleSave(this.editInput.value)}>Save</button>
        <button onClick={this.changeMode}>Cancel</button>
      </div>
    )
  }
  render() {
    return (
      <div>
        {(this.state.editMode) ? 
          this.renderEditMode() : this.renderReadMode()}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoEdit: ''
    }
  }
  submitTodo = (val) => {
    this.setState({ todos: [...this.state.todos, val]})
  }
  deleteTodo = (todo) => {
    console.log("delete: " + todo)
  }
  saveTodo = (e) => {
    console.log(e)
  }
  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>

        <InputForm handleSubmit={this.submitTodo}/>

        {this.state.todos.map((todo, ind) => {
          return (
            <div key={ind}>
              {/* <input key={ind} value={todo} onChange={(e, todo) => this.editTodo(e, todo)} /> */}
              <Todo key={ind} text={todo} 
                      handleDelete={this.deleteTodo = this.deleteTodo.bind(this, todo)}
                      handleSave={this.saveTodo}
                    />
            </div>
          )
        })}

      </div>
    );
  }
}

export default App;
