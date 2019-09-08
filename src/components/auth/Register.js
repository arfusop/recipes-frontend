import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
			console.log("passwords do not match");
		} else {
			console.log("Success");
		}
	};

	return (
		<div className="registerContainer">
			<div className="registerHeader">Main Course</div>
			<div className="registerForm">
				<div className="formHeader">Sign Up</div>
				<div className="form">
					<input
						onChange={e => onChange(e)}
						placeholder="First Name"
						value={firstName}
						id="firstName"
						name="firstName"
						required
					/>
					<input
						onChange={e => onChange(e)}
						placeholder="Last Name"
						value={lastName}
						id="lastName"
						name="lastName"
						required
					/>
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
					<button onClick={e => onSubmit(e)}>Enter</button>
				</div>
			</div>
			<div className="registerLoginRow">
				Already have an account? <Link to="/login">Log in</Link>
			</div>
		</div>
	);
};

export default Register;
