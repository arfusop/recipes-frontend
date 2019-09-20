import React from "react";
import { Input } from "antd";
import { useSelector } from 'react-redux';

const LoginInfo = () => {
  const user = useSelector(state => state.auth.user);
  const { email } = user;
	return (
		<div>
			<Input disabled name="email" type="email" value={email} />
		</div>
	);
};

export default LoginInfo;
