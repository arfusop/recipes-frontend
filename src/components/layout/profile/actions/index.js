import { UPDATE_DIETS } from "../types";

export const updateDiets = payload => dispatch => {
  dispatch({ type: UPDATE_DIETS, payload });
};
