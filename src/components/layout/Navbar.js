import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Icon } from "antd";
import Nav from "../styled/Nav";
import { logout } from "../../store/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const { isAuthenticated, loading } = auth;

  const handleLogout = () => {
    dispatch(logout());
    return <Redirect to="/" />;
  };

  const authLinks = (
    <ul>
      <li>
        <Icon type="user" />
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Icon type="logout" />
        <a href="#" onClick={handleLogout}>
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Icon type="user-add" />
        <Link to="register">Sign Up</Link>
      </li>
      <li>
        <Icon type="login" />
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
