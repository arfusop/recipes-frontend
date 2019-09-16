import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "./styled/Nav";
import { logout } from "../../store/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const { isAuthenticated, loading } = auth;
  // console.log(auth);
  const authLinks = (
    <ul>
      <li>
        <div onClick={dispatch(logout)}>Logout</div>
      </li>
    </ul>
  );

  const guestLinks = (
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
  );

  return (
    <Nav className="navbar">
      <Link to="/">Main Course</Link>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </Nav>
  );
};

export default Navbar;
