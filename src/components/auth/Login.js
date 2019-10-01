import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Button, Input, Icon, Spin } from "antd";
import AuthBody from "./styled/AuthBody";
import { login } from "../../store/actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(email, password));
  };

  // redirect if logged in
  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <AuthBody className="registerContainer">
      <div className="registerHeader">Main Course</div>
      <div className="registerForm">
        <div className="formHeader">Log In</div>
        <div className="form">
          <Input
            onChange={e => onChange(e)}
            placeholder="Email"
            value={email}
            id="email"
            name="email"
            required
          />
          <Input.Password
            onChange={e => onChange(e)}
            placeholder="Password"
            value={password}
            id="password"
            name="password"
            required
            minLength="6"
          />
          <Button size="large" type="primary" onClick={e => onSubmit(e)}>
            Log In <Icon type="login" />
          </Button>
        </div>
      </div>
      <div className="registerLoginRow">
        Don't have an account?{" "}
        <Link className="routeLink" to="/register">
          Sign up
        </Link>
      </div>
      {loading && <Spin />}
    </AuthBody>
  );
};

export default Login;
