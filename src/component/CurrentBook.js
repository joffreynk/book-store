import React from 'react';
import PropTypes from 'prop-types';

const CurrentBook = ({ id, setProgress }) => (
  <div className="updateprogress">
    <p className="cuurent">CURRENT CHAPTER</p>
    <p className="chapter">chapiter 17</p>
    <button type="button" className="updateprogressbtn" id={`update${id}`} onClick={() => setProgress(Math.floor(Math.random() * 100))}>UPDATE PROGRESS</button>
  </div>
);

CurrentBook.propTypes = {
  id: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default CurrentBook;
