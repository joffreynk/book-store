import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import Form from './Form';

const Books = ({ books }) => (
  <div className="books">
    {books.map((book) => {
      const {
        id,
        title,
        author,
        category,
        completed,
        chapter,
      } = book;
      return (
        <Book
          key={book.id}
          id={id}
          title={title}
          author={author}
          category={category}
          completed={completed}
          chapter={chapter}
        />
      );
    })}
    <Form />
  </div>
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      completed: PropTypes.number.isRequired,
      chapter: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default Books;
