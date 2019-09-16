import { UPDATE_DIETS } from "../types";
export const initialState = {
  diets: []
};

export const updateProfileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_DIETS:
      return {
        ...state,
        diets: payload
      };

    default:
      return state;
  }
};
