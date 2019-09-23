import axios from "axios";
import { setAlert } from "../alertActions";
import { GET_PROFILE, PROFILE_ERROR } from "../../types/profileTypes";

// get current profile
export const getCurrentProfile = () => async dispatch => {
  // api/profile/me
  try {
    const res = await axios.get(
      "https://maincourse-backend.herokuapp.com/api/profile/me"
    );

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
