import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books2';

const BookInfo = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();
  return (
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
        <button type="button" id={`remove${id}`} onClick={() => dispatch(removeBook(id))}>Remove</button>
        {' '}
        |
        <button type="button" id={`edit${id}`}>Edit</button>
      </div>
    </div>
  );
};

BookInfo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookInfo;
