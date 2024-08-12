import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'
// AuthContext
import { AuthContext } from '../../../context/AuthContext';

const Navbar = () => {
  const { isLogin, logout } = useContext(AuthContext);
  return (
    isLogin
      ?
        <nav>
            <div className="nav-wrapper navbar blue">
              <NavLink to="/" className="brand-logo left">Todo MERN</NavLink>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>                     
                <li><NavLink to="/login" onClick={logout}>Sign Out</NavLink></li>
              </ul>
            </div>
        </nav>
      :
        <nav>
            <div className="nav-wrapper navbar blue">
              <NavLink to="/" className="brand-logo left">Todo MERN</NavLink>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/login">Sign In</NavLink></li>
              </ul>
            </div>
        </nav>
  )
}

export default Navbar;