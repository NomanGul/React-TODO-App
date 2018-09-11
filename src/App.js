import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";

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

  addTodo = (todo) => {
    const prevTodos = this.state.todos;
    prevTodos.push({ id: prevTodos.length + 1, todoContent: todo });
    this.setState({
      notes: prevTodos
    })
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
        <div className="todosFooter">
          <TodoForm addTodo={this.addTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
