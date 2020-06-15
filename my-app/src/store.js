import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";

const logMiddleware = ({ getState }) => next => action => {
  console.log("logMiddleware", action.type, getState());
  return next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logMiddleware)
);

export default store;
