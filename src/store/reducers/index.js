import { combineReducers } from "redux";
import alert from "./alertsReducer";
import auth from "./authReducer";

const rootReducer = combineReducers({
  alerts: alert,
  auth: auth
});

export default rootReducer;
