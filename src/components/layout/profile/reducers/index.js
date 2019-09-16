import { UPDATE_DIETS, UPDATE_DOB } from "../types";
export const initialState = {
  diets: [],
  dob: ""
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

    default:
      return state;
  }
};
