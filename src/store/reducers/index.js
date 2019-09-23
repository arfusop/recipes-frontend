import { combineReducers } from "redux";
import alert from "./alertsReducer";
import auth from "./authReducer";
import profile from "./profileReducer";

const rootReducer = combineReducers({
  alerts: alert,
  auth: auth,
  profile: profile
});

export default rootReducer;
