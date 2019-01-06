import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Stats from './components/Stats';

class App extends Component {
  state = {
    todos: []
  }

  onSaveTodo = (newTodo) => {
    const nextTodos = this.state.todos.concat({
      id: newTodo+Date.now() + Math.random(),
      title: newTodo,
      done: false
    });
    this.setState({
      todos: nextTodos
    });
  }

  onClickRemove = (todoId) => {
    const nextTodos = this.state.todos.filter((todo) => {
      return todo.id !== todoId;
    });
    this.setState({
      todos: nextTodos
    });
  }

  onClickDone = (todoId) => {
    const nextTodos = this.state.todos.map((todo) => {
      if(todo.id === todoId) {
        return Object.assign({}, todo, {
          done: true
        });
      }
      return todo;
    })
    this.setState({
      todos: nextTodos
    });
  }

  render() {
    return (
      <div className="App">
        <Stats todos={this.state.todos} />
        <TodoList
          todos={this.state.todos}
          handleSaveTodo={this.onSaveTodo}
          handleClickRemove={this.onClickRemove}
          handleClickDone={this.onClickDone}
        />
      </div>
    );
  }
}

export default App;
