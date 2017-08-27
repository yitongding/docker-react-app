import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const AddTodo = ({ dispatch }) => {
  let inputStr;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputStr.value.trim()) {
            return;
          }
          dispatch(addTodo(inputStr.value));
          inputStr.value = '';
        }}
      >
        <input ref={(ref) => { inputStr = ref; }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

AddTodo.propTypes = propTypes;

export default connect()(AddTodo);
