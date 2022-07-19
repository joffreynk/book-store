import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ id }) => (
  <div className="progress">
    <p id={`progress${id}`}> 25 </p>
    <p>completed</p>
  </div>
);

Progress.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Progress;
