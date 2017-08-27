import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

const Todo = props => (
  // eslint-disable-next-line
  <li
    onClick={props.onTodoClick}
    style={{ textDecoration: props.completed ? 'line-through' : 'none' }}
  >
    {props.text}
  </li>
);

Todo.propTypes = propTypes;

export default Todo;
