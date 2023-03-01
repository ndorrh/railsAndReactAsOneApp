import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink className="Nav-Item"  to="" style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}>message</NavLink></li>
      </ul>
    </div>
  );
}

export default NavBar;