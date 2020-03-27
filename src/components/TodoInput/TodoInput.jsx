import React from 'react';
import PropTypes from 'prop-types';

import './TodoInput.css';

const TodoInput = ({ completeAllTasks, value, onChange, onKeyPress }) => (
  <div className="todo-input-wrapper">
    <i onClick={completeAllTasks} className="fas fa-angle-down" />
    <input
      className="todo-input"
      placeholder="What needs to be done?"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  </div>
);

TodoInput.propTypes = {
  completeAllTasks: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
};

TodoInput.defaultProps = {
  completeAllTasks: () => {},
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
};

export default TodoInput;
