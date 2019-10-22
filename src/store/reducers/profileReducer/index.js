import {
	GET_PROFILE,
	PROFILE_ERROR,
	UPDATE_DIETS,
	UPDATE_DOB,
	UPDATE_ALLERGIES,
	UPDATE_SKILL,
	UPDATE_GENDER,
	UPDATE_PROFILE_IMG,
	UPDATE_HOUSEHOLD
} from "../../types/profileTypes";

const initialState = {
	activeProfile: null,
	profiles: [],
	loading: true,
	error: {}
};

const profile = (state = initialState, action) => {
	const { payload, type } = action;

	switch (type) {
		case GET_PROFILE:
			return {
				...state,
				activeProfile: payload,
				loading: false
			};
		case UPDATE_DIETS:
		case UPDATE_DOB:
		case UPDATE_ALLERGIES:
		case UPDATE_SKILL:
		case UPDATE_GENDER:
		case UPDATE_PROFILE_IMG:
		case UPDATE_HOUSEHOLD:
			return {
				...state,
				activeProfile: {
					...state.activeProfile,
					[payload.label]: payload.data
				}
			};
		case PROFILE_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};
		default:
			return {
				...state
			};
	}
};

export default profile;
