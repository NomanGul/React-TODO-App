import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";
import config from "./config/firebase.config";
import firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.app = firebase.initializeApp(config);
    this.db = this.app
      .database()
      .ref()
      .child("todos");
    this.state = {
      todos: []
    };
  }

  componentWillMount() {
    const { todos } = this.state;
    const prevTodos = todos;
    this.db.on("child_added", snap => {
      prevTodos.push({
        id: snap.key,
        todoContent: snap.val().todoContent
      });
      this.setState({
        todos: prevTodos
      });
    });

    this.db.on("child_removed", snap => {
      for (let i = 0; i < prevTodos.length; i++) {
        if (prevTodos[i].id === snap.key) {
          prevTodos.splice(i, 1);
        }
      }
      this.setState({
        todos: prevTodos
      });
    });
  }

  addTodo = todo => this.db.push().set({ todoContent: todo });

  removeTodo = todoId => this.db.child(todoId).remove();

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
          <TodoForm addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
