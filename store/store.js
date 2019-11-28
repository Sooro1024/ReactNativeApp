import { createStore, applyMiddleware } from "redux";
import ThunckMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(ThunckMiddleware));

export default store;
