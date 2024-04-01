import React, { useState } from 'react';
import '../App'; // Import custom CSS file
import logo from '../images/logo.svg';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand"><img src={logo} alt="Logo" height={"40px"}/></div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          Menu
        </button>
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>

          <ul className="navbar-nav navbar-right">
          <li className="nav-item">Wordpress</li>
            <li className="nav-item">Website Builder</li>
            <li className="nav-item">Hosting</li>
            <li className="nav-item">Domains</li>
            <button>Log in</button>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Header;
