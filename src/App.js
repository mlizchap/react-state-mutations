import React, { Component } from 'react';
import './App.css';

import InputForm from './components/InputForm';
import TodoItem from './components/TodoItem';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }
  submitTodo = (val) => {
    if (val) {
      this.setState({ todos: [...this.state.todos, val]})
    }
  }
  deleteTodo = (todo) => {
    const todos = this.state.todos.filter(item => todo !== item);
    this.setState({todos});
  }
  editTodo = (input, todo) => {
    const todos = this.state.todos.map(item => {
      return (item === todo) ? input : item
    })
    this.setState({todos});
  }
  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>

        <InputForm handleSubmit={this.submitTodo}/>

        <div className="todos">
          {this.state.todos.map((todo, ind) => {
            return (
              <div key={ind}>
                <TodoItem 
                  key={ind} 
                  text={todo} 
                  handleDelete={this.deleteTodo}
                  handleSave={this.editTodo}
                />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
