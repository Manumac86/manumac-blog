import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.scss';

const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <ul className="navBar_list">
          <li className="navBar_list_item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navBar_list_item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="navBar_list_item">
            <NavLink to="/articles-list">Articles</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
