import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, COMPLETE_ALL_TASKS, CLEAR_COMPLETED_TASKS } from '../../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'TodoList' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [],
  }
}

const tasks = (state = TASKS.tasks, { id, text, isCompleted, type }) => {
  switch (type) {
    case ADD_TASK :
      return [
        ...state, {
          id,
          text,
          isCompleted,
        }
      ];
    case REMOVE_TASK:
        return [...state].filter(task => task.id !== id);
    case COMPLETE_TASK:
      return [...state].map(task => {
        if(task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    case COMPLETE_ALL_TASKS:
      const completedTasks = [...state].filter(task => task.isCompleted).length;
      return [...state].map(task => {
        task.isCompleted = completedTasks !== [...state].length;
        return task;
      });
    case CLEAR_COMPLETED_TASKS:
      return [...state].filter(task => !task.isCompleted);
    default:
      return state;
  }
};

export default tasks;
