import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Todo.css";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.todoContent = props.todoContent;
    this.todoId = props.todoId;
  }
  render(props) {
    return (
      <div className="todo fade-in">
        <p className="todoContent">{this.todoContent}</p>
      </div>
    );
  }
}

Todo.propTypes = {
  todoContent: PropTypes.string
};

export default Todo;
