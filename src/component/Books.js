import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books2';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className="books">
      {books.length > 0 ? books.map((book) => {
        const {
          id, title, author, category,
        } = book;
        return (
          <Book
            key={id}
            id={id}
            title={title}
            author={author}
            category={category}
          />
        );
      }) : ''}
      <Form />
    </div>
  );
};

export default Books;
