import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => (
  <div className="header inline-display">
    <div className="home-menu">
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
    <FaUserAlt className="styleIcon" />
  </div>
);

export default Header;
