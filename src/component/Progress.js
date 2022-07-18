import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ id, completed }) => (
  <div className="progress">
    <p id={`progress${id}`}>
      {completed}
      %
    </p>
    <p>completed</p>
  </div>
);

Progress.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};

export default Progress;
