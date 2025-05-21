import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../../public/sentiflip_logo.png" alt="" className='logoImg' />
        <div className="">SentiFlip</div>
      </div>
      
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/search" onClick={() => setIsOpen(false)}>Search</Link></li>
        <li><Link to="/analyzeByURL" onClick={() => setIsOpen(false)}>Analyze</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
