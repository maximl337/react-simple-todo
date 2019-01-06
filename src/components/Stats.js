import React from 'react';

export default ({ todos }) => (
  <ul class="inline">
    <li>Total: {todos.length}</li>
    <li>Done: {todos.filter((todo) => todo.done).length}</li>
    <li>Complete rate: {
      todos.length > 0
      ? (todos.filter((todo) => todo.done).length / todos.length) * 100 + '%'
      : 'N/A'
    }</li>
  </ul>
);