import { GET_PROFILE, PROFILE_ERROR } from "../../types/profileTypes";

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
