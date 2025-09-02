import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">Ascendify</div>
        <nav className="nav-links">
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">My Learning</a></li>
            <li><a href="#"> AI-Chatbot</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;