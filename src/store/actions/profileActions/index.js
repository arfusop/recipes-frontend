import axios from "axios";
import { setAlert } from "../alertActions";
import { GET_PROFILE, PROFILE_ERROR } from "../../types/profileTypes";

// get current profile
export const getCurrentProfile = () => async dispatch => {
	// api/profile/me
	const headers = {
		"x-auth-token": localStorage.getItem("token")
	};

	try {
		const res = await axios.get(
			"https://maincourse-backend.herokuapp.com/api/profile/me",
			{ headers }
		);

		// set the format of the dob data to a full date
		res.data.dob = new Date(res.data.dob);

		dispatch({ type: GET_PROFILE, payload: res.data });
	} catch (error) {
		console.log(error);
		dispatch({
			type: PROFILE_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status
			}
		});
	}
};

// update current profile
export const updateCurrentProfile = (type, data, label) => dispatch => {
	dispatch({ type, payload: { label, data } });
};
