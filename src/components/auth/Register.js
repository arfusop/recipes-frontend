import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const { email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="registerContainer">
      <div className="registerHeader">Main Course</div>
      <div className="registerForm">
        <div className="formHeader">Sign Up</div>
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
          <input
            onChange={e => onChange(e)}
            placeholder="Confirm password"
            value={password2}
            id="password2"
            name="password2"
            required
            minLength="6"
          />
          <button>Enter</button>
        </div>
      </div>
      <div className="registerLoginRow">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default Register;
