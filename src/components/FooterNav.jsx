import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FooterNav = () => {
  const location = useLocation();

  return (
    <div className="bottom-nav">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/info" className={location.pathname === '/info' ? 'active' : ''}>Info</Link>
      <Link to="/projects" className={location.pathname.startsWith('/projects') ? 'active' : ''}>Projects</Link>
      <Link to="/blog" className={location.pathname.startsWith('/blog') ? 'active' : ''}>Blog</Link>
      <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link>
      <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
    </div>
  );
};

export default FooterNav;
