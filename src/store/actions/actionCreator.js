import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  COMPLETE_ALL_TASKS,
  CHANGE_FILTER,
  CLEAR_COMPLETED_TASKS
} from '../../constants';

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});

export const completeAllTasks = () => ({
  type: COMPLETE_ALL_TASKS
});

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter,
});

export const clearCompletedTasks = () => ({
  type: CLEAR_COMPLETED_TASKS
});
