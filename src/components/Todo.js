import React from 'react';

export default (props) => (
  <li className={props.todo.done ? 'done' : ''}>
    {props.todo.title}
    &nbsp;<button onClick={() => props.handleClickDone(props.todo.id)}>Done</button>
    &nbsp;<button onClick={() => props.handleClickRemove(props.todo.id)}>Remove</button>
  </li>
);