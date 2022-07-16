import React from 'react';
import PropTypes from 'prop-types';

const BookInfo = ({
  title, author, category, id,
}) => (
  <div className="bookinfo">
    <p className="action">{category}</p>
    <p className="title">{title}</p>
    <p className="author">
      {author}
      {' '}
    </p>
    <div className="changestatus">
      <button type="button" id={`comment${id}`}>comments</button>
      {' '}
      |
      <button type="button" id={`remove${id}`}>Remove</button>
      {' '}
      |
      <button type="button" id={`edit${id}`}>Edit</button>
    </div>
  </div>
);

BookInfo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookInfo;
