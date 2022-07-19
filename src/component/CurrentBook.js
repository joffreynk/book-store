import React from 'react';
import PropTypes from 'prop-types';

const CurrentBook = ({ id }) => (
  <div className="updateprogress">
    <p className="cuurent">CURRENT CHAPTER</p>
    <p className="chapter">chapiter 17</p>
    <button type="button" className="updateprogressbtn" id={`update${id}`}>UPDATE PROGRESS</button>
  </div>
);

CurrentBook.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CurrentBook;
