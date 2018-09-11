import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";

class App extends Component {
  render() {
    return (
      <div>
        <h1>React & Firebase Todo List</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
