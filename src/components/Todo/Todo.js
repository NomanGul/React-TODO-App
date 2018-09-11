import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Todo.css";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.todoContent = props.todoContent;
    this.todoId = props.todoId;
  }

  handleRemoveTodo = id => this.props.removeTodo(id);
  
  render(props) {
    return (
      <div className="todo fade-in">
        <span
          className="closebtn"
          onClick={() => this.handleRemoveTodo(this.todoId)}
        >
          &times;
        </span>
        <p className="todoContent">{this.todoContent}</p>
      </div>
    );
  }
}

Todo.propTypes = {
  todoContent: PropTypes.string
};

export default Todo;
