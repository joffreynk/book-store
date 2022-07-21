import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header inline-display">
    <Link to="/"><h2>Bookstore CMS</h2></Link>
    {' '}
    <nav>
      <Link to="/">BOOKS</Link>
      {' '}
      |
      {' '}
      <Link to="categories">CATEGORIES</Link>
    </nav>
  </div>
);

export default Header;
