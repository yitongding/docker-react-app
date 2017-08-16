import React from 'react';

export default class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li 
        onClick={this.props.onTodoClick} 
        style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
      >
        {this.props.text}
      </li>
    );
  }
}
