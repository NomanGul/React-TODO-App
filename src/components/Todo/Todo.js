import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Todo.css";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.message = "Hello from the Todo";
  }
  render(props) {
    return <h1>{this.message}</h1>;
  }
}

Todo.PropTypes = {};

export default Todo;
