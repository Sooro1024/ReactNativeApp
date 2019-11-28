import { combineReducers } from "redux";
import categories from "./categoriesReducer";

const rootreducer = combineReducers({ categories });

export default rootreducer;
