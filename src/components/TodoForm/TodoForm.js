import React, { Component } from "react";
import "./TodoForm.css";

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoContent: ""
    };
  }

  userInputHandler = e => {
    this.setState({
      newTodoContent: e.target.value
    })
  }

  writeTodo = () => {
    const { addTodo } = this.props,
          { newTodoContent } = this.state;

    addTodo(newTodoContent);
    this.setState({
      newTodoContent: ''
    })
  }

  render() {
    const { newTodoContent } = this.state;
    return (
      <div className="formWrapper">
        <input
          className="todoInput"
          placeholder="Write a new To Do"
          value={newTodoContent}
          onChange={this.userInputHandler}
        />
        <button className="todoButton" onClick={this.writeTodo}>Add Todo</button>
      </div>
    );
  }
}

export default TodoForm;
