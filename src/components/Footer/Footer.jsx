import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const FILTERS_BTN = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Completed',
    id: 'completed'
  }
];

const Footer = ({ amount, activeFilter, isCompleted, changeFilter, clearCompletedTasks }) => (
  <div className="footer">
    <span className="amount">{`${amount} ${amount !== 1 ? 'items' : 'item'} left`}</span>
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }) => (
        <button
          onClick={() => {changeFilter(id)}}
          key={id}
          className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
        >{text}</button>
      ))}
    </div>
    <div className="clear-completed-box">
      <span
        onClick={clearCompletedTasks}
        className="clear-completed"
        style={{
          display: isCompleted ? 'block' : 'none'
        }}
      >
        Clear completed
      </span>
    </div>
  </div>
);

Footer.propTypes = {
  amount: PropTypes.number,
  activeFilter: PropTypes.string,
  isCompleted: PropTypes.bool,
  changeFilter: PropTypes.func,
  clearCompletedTasks: PropTypes.func,
};

Footer.defaultProps = {
  changeFilter: () => {},
  clearCompletedTasks: () => {},
  amount: 0,
  activeFilter: 'all',
  isCompleted: false,
};

export default Footer;
