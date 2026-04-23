import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ setContact }) {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        <div className="nav-avatar">K</div>
        <span className="nav-name">Kottamasu Harshith</span>
      </NavLink>

      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Projects
        </NavLink>
      </div>

      <button className="nav-cta" onClick={() => setContact(true)}>
        Get in touch
      </button>
    </nav>
  );
}

export default Navbar;
