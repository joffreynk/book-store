import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = ({ id, progressState }) => (
  <div className="progress">
    <div className="pro">
      <CircularProgressbar value={progressState} strokeWidth={8} />
    </div>
    <div className="progressValue">
      <p id={`progress${id}`} className="progressData">
        {progressState}
        %
      </p>
      <p className="progresstext">completed</p>
    </div>
  </div>
);

Progress.propTypes = {
  id: PropTypes.string.isRequired,
  progressState: PropTypes.number.isRequired,
};

export default Progress;
