import { combineReducers } from "redux";
import categories from "./categoriesReducer";
import photosReducer from "./catPhotosReducer";

const rootreducer = combineReducers({ categories, photosReducer });

export default rootreducer;
