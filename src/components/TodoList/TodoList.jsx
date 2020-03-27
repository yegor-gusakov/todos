import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.css';
import ToDoItem from '../TodoItem/TodoItem';

const TodoList = ({ tasksList, removeTask, completeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem completeTask={completeTask} removeTask={removeTask} id={id} key={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
);

TodoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
};

TodoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {},
};

export default TodoList;
