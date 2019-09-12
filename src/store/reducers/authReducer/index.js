import { REGISTER_SUCCESS, REGISTER_FAIL } from "../../types/authTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null
};

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      break;
    case REGISTER_FAIL:
      break;

    default:
      break;
  }
};
