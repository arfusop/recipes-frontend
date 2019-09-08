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

	const onSubmit = e => {
		e.preventDefault();
		console.log("SUCCESS");
	};

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
					<button onClick={e => onSubmit(e)}>Enter</button>
				</div>
				<div>
					Don't have an account? <Link to="/register">Sign up</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
