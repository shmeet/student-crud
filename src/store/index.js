import { createStore, applyMiddleware, compose } from "redux";
import studentReducer from "./../reducers";
import thunk from "redux-thunk";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
  : compose(applyMiddleware(thunk));
export default createStore(studentReducer, undefined, enhancer);
