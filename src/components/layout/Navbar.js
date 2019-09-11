import React from "react";
import { Link } from "react-router-dom";
import Nav from './styled/Nav';

const Navbar = () => {
  return (
    <Nav className="navbar">
      <Link to="/">Main Course</Link>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="register">Sign Up</Link>
        </li>
        <li>
          <Link to="login">Log In</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
