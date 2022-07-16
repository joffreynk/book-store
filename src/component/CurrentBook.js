import React from 'react';
import PropTypes from 'prop-types';

const CurrentBook = ({ id, chapter }) => (
  <div className="updateprogress">
    <p className="cuurent">CURRENT CHAPTER</p>
    <p className="chapter">{chapter}</p>
    <button type="button" className="updateprogressbtn" id={`update${id}`}>UPDATE PROGRESS</button>
  </div>
);

CurrentBook.propTypes = {
  id: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default CurrentBook;
