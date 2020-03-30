import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Todo.css';
import {
  addTask,
  changeFilter,
  clearCompletedTasks,
  completeAllTasks,
  completeTask,
  removeTask
} from '../../store/actions/actionCreator';
import Footer from '../../components/Footer/Footer';
import TodoInput from '../../components/TodoInput/TodoInput';
import TodoList from '../../components/TodoList/TodoList';

class Todo extends Component {

  state = {
    taskText: '',
  };

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const { addTask } = this.props;
      addTask((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: '',
      });
    }
  };

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  };

  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  };

  render() {
    const { taskText } = this.state;
    const { tasks, removeTask, completeTask, completeAllTasks, filters, changeFilter, clearCompletedTasks } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTasksCounter(tasks);
    const isCompleted = !!tasks.filter(task => task.isCompleted).length;

    return (
      <div className="todo-wrapper">
        <TodoInput
          completeAllTasks={completeAllTasks}
          onKeyPress={this.addTask}
          onChange={this.handleInputChange}
          value={taskText}
        />
        {isTasksExist && <TodoList completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask} />}
        {isTasksExist &&
          <Footer
            changeFilter={changeFilter}
            clearCompletedTasks={clearCompletedTasks}
            amount={taskCounter}
            activeFilter={filters}
            isCompleted={isCompleted} />}
      </div>
    );
  }
}

export default connect(({ tasks, filters }) => ({
  tasks,
  filters,
}), { addTask, removeTask, completeTask, completeAllTasks, changeFilter, clearCompletedTasks })(Todo);
