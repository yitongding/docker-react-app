import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const propTypes = {
  todos: PropTypes.arrayOf().isRequired,
};


const TodoList = (props) => {
  const todos = props.todos.map(todo => (
    <Todo key={todo.id} {...todo} onTodoClick={() => props.onTodoClick(todo.id)} />
  ));

  return (
    <ul>
      {todos}
    </ul>
  );
};

TodoList.propTypes = propTypes;

export default TodoList;
