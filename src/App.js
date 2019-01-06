import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todos: []
  }

  onSaveTodo = (newTodo) => {
    const nextTodos = this.state.todos.concat(newTodo);
    this.setState({
      todos: nextTodos
    });
  }

  render() {
    return (
      <div className="App">
        <TodoList
          todos={this.state.todos}
          handleSaveTodo={this.onSaveTodo}
        />
      </div>
    );
  }
}

export default App;
