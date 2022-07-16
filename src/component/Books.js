import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Books = ({ books }) => (
  <div className="books">
    {books.map((book) => <Book key={book.id} />)}
  </div>
);

Books.propTypes = {
  books: PropTypes.instanceOf().isRequired,
};

export default Books;
