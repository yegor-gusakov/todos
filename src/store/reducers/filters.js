import { CHANGE_FILTER } from '../../constants';

const BASE_FILTER = 'all';

const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  if (type === CHANGE_FILTER) {
    return activeFilter;
  } else {
    return state;
  }
};

export default filter;
