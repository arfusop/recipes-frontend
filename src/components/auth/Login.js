import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="registerContainer">
      <div className="registerHeader">Main Course</div>
      <div className="registerForm">
        <div className="formHeader">Log In</div>
        <div className="form">
          <input
            onChange={e => onChange(e)}
            placeholder="Email"
            value={email}
            id="email"
            name="email"
            required
          />
          <input
            onChange={e => onChange(e)}
            placeholder="Password"
            value={password}
            id="password"
            name="password"
            required
            minLength="6"
          />
          <button>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
