import React from 'react';

const BookInfo = () => (
  <div className="bookinfo">
    <p className="action">Action</p>
    <p className="title">book title</p>
    <p className="author">book author</p>
    <div className="changestatus">
      <button type="button">comments</button>
      {' '}
      |
      <button type="button">Remove</button>
      {' '}
      |
      <button type="button">Edit</button>
    </div>
  </div>
);

export default BookInfo;
