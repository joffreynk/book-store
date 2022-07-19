import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((store) => store.books);
  return (
    <div className="books">
      {books.map((book) => {
        const {
          id,
          title,
          author,
          category,
        } = book;
        return (
          <Book
            key={book.id}
            id={id}
            title={title}
            author={author}
            category={category}
          />
        );
      })}
      <Form />
    </div>
  );
};

export default Books;
