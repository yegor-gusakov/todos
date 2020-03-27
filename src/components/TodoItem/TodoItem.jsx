import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

const TodoItem = ({ text, isCompleted, removeTask, id, completeTask }) => (
  <li className="todo-item">
    <i onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i onClick={() => removeTask(id)} className="fas fa-times" />
  </li>
);

TodoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
};

TodoItem.defaultProps = {
  text: '',
  isCompleted: false,
  removeTask: () => {},
  id: 0,
};

export default TodoItem;
