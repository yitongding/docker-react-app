import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    const todos = this.props.todos.map(todo => (
      <Todo key={todo.id} {...todo} onTodoClick={() => this.props.onTodoClick(todo.id)}/>
    ));

    return (
      <ul>
        {todos}
      </ul>
    );
  }
}
