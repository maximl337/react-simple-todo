import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component {
  state = {
    newTodo: ''
  }

  setNewTodo = (e) => {
    this.setState({
      newTodo: e.target.value
    });
  }

  handleSaveTodo = () => {
    const { newTodo } = this.state;
    if(newTodo.length < 1) {
      return;
    }
    this.props.handleSaveTodo(newTodo);
    this.setState({
      newTodo: ''
    });
  }

  onClickDone = (todoId) => {
    this.props.handleClickDone(todoId);
  }

  onClickRemove = (todoId) => {
    this.props.handleClickRemove(todoId);
  }

  render() {
    const todos = this.props.todos;

    return (
      <div>
        <h1> Todo List </h1>
        <input 
          type="text"  
          value={this.state.newTodo}
          onChange={this.setNewTodo}
        />
        <button onClick={this.handleSaveTodo}>Save</button>
        {todos.map((todo, index) => (
          <Todo 
            todo={todo}
            key={todo.id}
            handleClickDone={this.onClickDone}
            handleClickRemove={this.onClickRemove}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;