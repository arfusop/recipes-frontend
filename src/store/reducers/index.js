import { combineReducers } from "redux";
import alert from "./alertsReducer";

const rootReducer = combineReducers({
  alerts: alert
});

export default rootReducer;
