import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, todoContent: "I'm Todo 1" },
        { id: 2, todoContent: "I'm Todo 2" }
      ]
    };
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="todosWrapper">
        <div className="todosHeader">
          <h1 className="heading">React & Firebase Todo App</h1>
        </div>
        <div className="todosBody">
          {todos.map(todo => {
            return (
              <Todo
                todoContent={todo.todoContent}
                todoId={todo.id}
                key={todo.id}
              />
            );
          })}
        </div>
        <div className="todosFooter">I'm a Footer...</div>
      </div>
    );
  }
}

export default App;
