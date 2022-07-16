import React from 'react';

const Form = () => (
  <div className="form">
    <h2>ADD NEW BOOK</h2>
    <form className="from-inputs">
      <input type="text" placeholder="Book title" id="book-title" className="add-title" />
      <select className="select">
        <option value="action">action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="button" className="addbtn">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
