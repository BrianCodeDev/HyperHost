import React, { useState } from 'react';
import '../App'; // Import custom CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">React Navbar</div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          Menu
        </button>
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">Left Text 1</li>
            <li className="nav-item">Left Text 2</li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <li className="nav-item">Right Text 1</li>
            <li className="nav-item">Right Text 2</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
