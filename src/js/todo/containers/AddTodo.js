import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';

let AddTodo = ({ dispatch }) => {
  let _input; 

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!_input.value.trim()) {
            return;
          }
          dispatch(addTodo(_input.value));
          _input.value = '';
        }}
      >
        <input ref={c => _input = c} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

AddTodo = connect() (AddTodo);

export default AddTodo;
