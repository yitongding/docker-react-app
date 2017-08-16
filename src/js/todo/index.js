import React from "react";

import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';


export default class TodoApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}
