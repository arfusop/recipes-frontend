import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Button, Input, Icon } from "antd";
// import PropTypes from 'prop-types';
import { register } from "../../store/actions/authActions";
import AuthBody from "./styled/AuthBody";

import { setAlert } from "../../store/actions/alertActions";

const Register = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(setAlert("Passwords do not match", "danger"));
    } else {
      dispatch(register({ firstName, lastName, email, password }));
    }
  };

  // redirect if logged in || registered
  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <AuthBody className="registerContainer">
      <div className="registerHeader">Main Course</div>
      <div className="registerForm">
        <div className="formHeader">Sign Up</div>
        <div className="form">
          <div className="names">
            <Input
              onChange={e => onChange(e)}
              placeholder="First Name"
              value={firstName}
              id="firstName"
              name="firstName"
              required
              size="large"
            />
            <Input
              onChange={e => onChange(e)}
              placeholder="Last Name"
              value={lastName}
              id="lastName"
              name="lastName"
              required
              size="large"
            />
          </div>
          <Input
            onChange={e => onChange(e)}
            placeholder="Email"
            value={email}
            id="email"
            name="email"
            required
            size="large"
          />
          <Input.Password
            onChange={e => onChange(e)}
            placeholder="Password"
            value={password}
            id="password"
            name="password"
            required
            minLength="6"
            size="large"
          />
          <Input.Password
            onChange={e => onChange(e)}
            placeholder="Confirm password"
            value={password2}
            id="password2"
            name="password2"
            required
            minLength="6"
            size="large"
          />
          <Button size="large" type="primary" onClick={e => onSubmit(e)}>
            Sign Up <Icon type="right" />
          </Button>
        </div>
      </div>
      <div className="registerLoginRow">
        Already have an account?{" "}
        <Link className="routeLink" to="/login">
          Log in
        </Link>
      </div>
    </AuthBody>
  );
};

export default Register;
