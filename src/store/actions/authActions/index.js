import axios from "axios";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	USER_LOADED,
	AUTH_ERROR
} from "../../types/authTypes";
import { setAlert } from "../alertActions";
import setAuthToken from "../../../utils/setAutoToken";

// load user
export const loadUser = () => async dispatch => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get("/api/auth");

		dispatch({
			type: USER_LOADED,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

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

		dispatch(loadUser());
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

// login user
export const login = (email, password) => async dispatch => {
	console.log("login hit");
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post("/api/auth", body, config);
		// const res = await axios.post(
		// 	"https://maincourse-backend.herokuapp.com/api/auth",
		// 	body,
		// 	config
		// );

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});

		dispatch(loadUser());
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
