import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-header">
      <div className="nav-container">
        <Link to="/" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
          Mukundha Suresh
        </Link>
        <div className="nav-links">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/experience" className="nav-link">Experience</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
