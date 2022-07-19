import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from './BookInfo';
import CurrentBook from './CurrentBook';
import Progress from './Progress';

const Book = ({
  id,
  title,
  author,
  category,
}) => (
  <div className="book inline-display">
    <BookInfo
      id={id}
      title={title}
      author={author}
      category={category}
    />
    <Progress
      id={id}
    />
    <CurrentBook
      id={id}
    />
  </div>
);
Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
