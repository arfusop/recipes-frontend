import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../../types/authTypes";
import { setAlert } from "../alertActions";

// register user
export const register = ({
	firstName,
	lastName,
	email,
	password
}) => async dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	const body = JSON.stringify({ firstName, lastName, email, password });

	try {
		const res = await axios.post("/api/users", body, config);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});
	} catch (error) {
		const errors = error.response.data.errors;

		if (errors) {
			errors.forEach(err => dispatch(setAlert(err.msg, "danger")));
		}
		dispatch({
			type: REGISTER_FAIL
		});
	}
};
