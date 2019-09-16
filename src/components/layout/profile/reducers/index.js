import {
	UPDATE_DIETS,
	UPDATE_DOB,
	UPDATE_ALLERGIES,
	UPDATE_SKILL,
	UPDATE_HOUSEHOLD,
	UPDATE_GENDER
} from "../types";
export const initialState = {
	allergies: [],
	diets: [],
	dob: "",
	cookingSkill: "",
	houseHoldSize: 0,
	gender: ""
};

export const updateProfileReducer = (state = initialState, action) => {
	const { type, payload } = action;
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

		default:
			return state;
	}
};
