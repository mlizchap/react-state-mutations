import React, { Component } from 'react';

//const hideBtns = { display: 'none' }

class ReadTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            completed: false
        }
    }
    crossOut = () => {
        this.setState({ completed: !this.state.completed})
    }
    render() {
        return (
            <div 
                className="readTodo"
                onMouseOver={() => this.setState({hovered: true})}
                onMouseOut={() => this.setState({hovered: false})}
            >
                  <p 
                    onClick={this.crossOut}
                    style={(this.state.completed) ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}
                    >
                    {this.props.text}
                </p>
              <div className="readBtns" style={(this.state.hovered) ? {display: 'inline'} : {display: 'none'}}>
                  <button onClick={this.props.handleChange}>Edit</button>
                  <button onClick={() => this.props.handleDelete(this.props.text)}>Delete</button>
              </div>
            </div>
        )        
    }
}

export default ReadTodo;