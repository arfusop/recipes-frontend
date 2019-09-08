import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const reduxMiddleware = [thunk];

const composeEnhancers = composeWithDevTools({ trace: false, traceLimit: 25 });

const store = createStore(
  rootReducer,
  process.NODE_ENV !== "production"
    ? composeEnhancers(applyMiddleware(...reduxMiddleware))
    : compose(applyMiddleware(...reduxMiddleware))
);

export default store;
