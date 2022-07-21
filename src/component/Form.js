import React from 'react';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books2';

const Form = () => {
  const dispatch = useDispatch();
  const handleInput = () => {
    const titleInput = document.getElementById('book-title');
    const authorInput = document.getElementById('book-author');
    const categoryInput = document.getElementById('category');
    const title = titleInput.value;
    const author = authorInput.value;
    const category = categoryInput.value;
    if (title.length && author.length && category.length) {
      dispatch(addBook({
        item_id: uuid().slice(1, 9), title, author, category,
      }));
      titleInput.value = '';
      authorInput.value = '';
      document.getElementById('error').innerHTML = '';
    } else {
      document.getElementById('error').innerHTML = 'Please, Fill all fields';
    }
  };
  return (
    <div className="form">
      <h2>ADD NEW BOOK</h2>
      <p id="error" />
      <form className="from-inputs" method="POST">
        <input type="text" placeholder="Book title" id="book-title" className="add-title" />
        <input type="text" placeholder="Book author" id="book-author" className="add-author" />
        <select className="select" id="category">
          <option value="action">action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="button" className="addbtn" onClick={handleInput}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
