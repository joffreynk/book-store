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
  completed,
  chapter,
}) => (
  <div className="book inline-display">
    <BookInfo
      id={id}
      title={title}
      author={author}
      category={category}
    />
    <Progress
      completed={completed}
      id={id}
    />
    <CurrentBook
      id={id}
      chapter={chapter}
    />
  </div>
);
Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
