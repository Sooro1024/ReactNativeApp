import { createStore, applyMiddleware } from "redux";
import ThunckMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const logger = store => nextSore => action => {
  console.log({ action });
  nextSore(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(ThunckMiddleware, logger)
);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
