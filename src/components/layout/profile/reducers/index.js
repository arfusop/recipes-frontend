import {
	UPDATE_DIETS,
	UPDATE_DOB,
	UPDATE_ALLERGIES,
	UPDATE_SKILL,
	UPDATE_HOUSEHOLD,
	UPDATE_GENDER,
	UPDATE_PROFILE_IMG
} from "../types";

export const initialState = {
	allergies: [],
	diets: [],
	dob: "",
	cookingSkill: "",
	houseHoldSize: 0,
	gender: "",
	profilePic: {
		small: "",
		large: ""
	}
};

export const updateProfileReducer = (state = initialState, action) => {
	const { type, payload } = action;
	console.log(`type: ${type}`);
	switch (type) {
		case UPDATE_DIETS:
			return {
				...state,
				diets: payload
			};
		case UPDATE_DOB:
			return {
				...state,
				dob: payload
			};
		case UPDATE_ALLERGIES:
			return {
				...state,
				allergies: payload
			};
		case UPDATE_SKILL:
			return {
				...state,
				cookingSkill: payload
			};
		case UPDATE_HOUSEHOLD:
			return {
				...state,
				houseHoldSize: payload
			};
		case UPDATE_GENDER:
			return {
				...state,
				gender: payload
			};
		case UPDATE_PROFILE_IMG:
			console.log("update profile pic in state.");
			return {
				...state,
				profilePic: {
					small: payload.small,
					large: payload.large
				}
			};

		default:
			return state;
	}
};
