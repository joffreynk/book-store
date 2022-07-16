import React from 'react';
import BookInfo from './BookInfo';
import CurrentBook from './CurrentBook';
import Progress from './Progress';

const Book = () => (
  <div className="book inline-display">
    <BookInfo />
    <Progress />
    <CurrentBook />
  </div>
);

export default Book;
