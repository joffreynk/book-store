import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BookInfo from './BookInfo';
import CurrentBook from './CurrentBook';
import Progress from './Progress';

const Book = ({
  id,
  title,
  author,
  category,
}) => {
  const [progressState, setProgress] = useState(Math.floor(Math.random() * 100));
  return (
    <div className="book inline-display">
      <BookInfo
        id={id}
        title={title}
        author={author}
        category={category}
      />
      <div className="progress-part">
        <Progress
          id={id}
          progressState={progressState}
        />
        <div className="stickBar" />
        <CurrentBook
          setProgress={setProgress}
          id={id}
        />
      </div>
    </div>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
