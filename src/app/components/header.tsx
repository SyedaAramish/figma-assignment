import React from 'react';
import './header.css'; // Your CSS file
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';

const Page = () => {
  return (
    <div className="page-container">
      <header className="header">
        {/* Logo comes first */}
        <div className="logo">
          <strong>cyber</strong>
        </div>

        {/* Search bar comes next */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </div>

        {/* Navigation links */}
        <nav className="navigation">
         <strong> <a href="/">Home</a></strong>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/blog">Blog</a>
        </nav>
        <div className="icons-right">
          <FaHeart /> {/* Heart icon */}
          <FaShoppingCart /> {/* Shopping cart icon */}
          <FaUser /> {/* User icon */}
        </div>
      </header>
    </div>
  );
};

export default Page;
