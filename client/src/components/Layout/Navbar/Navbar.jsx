import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
        <div className="nav-wrapper navbar blue">
        <NavLink to="/" className="brand-logo">Todo MERN</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/">Main</NavLink></li>
          <li><NavLink to="/login">Sign In</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar;