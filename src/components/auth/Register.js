import React, { useState } from "react";
import { Button, Form, FormGroup, FormInput } from "shards-react";

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
        <Form>
          <FormGroup>
            <FormInput
              onChange={e => onChange(e)}
              placeholder="Email"
              value={email}
              id="email"
              name="email"
            />
            <FormInput
              onChange={e => onChange(e)}
              placeholder="Password"
              value={password}
              id="password"
              name="password"
            />
            <FormInput
              onChange={e => onChange(e)}
              placeholder="Confirm password"
              value={password2}
              id="password2"
              name="password2"
            />
          </FormGroup>
          <Button>Enter</Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
