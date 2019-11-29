import {
  GET_CAT_PHOTOS_BY_CATEGORY_ID,
  GET_MORE_IN_CURRENT_CATEGORY
} from "../constants";

const initialState = {
  currentCategoryID: null,
  error: null,
  catPhotos: null,
  panding: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CAT_PHOTOS_BY_CATEGORY_ID.ERROR:
      return { ...state, ...payload };
    case GET_CAT_PHOTOS_BY_CATEGORY_ID.PANDING:
      return { ...state, ...payload };
    case GET_CAT_PHOTOS_BY_CATEGORY_ID.SUCCESS:
      return { ...state, ...payload };
    case GET_MORE_IN_CURRENT_CATEGORY.ERROR:
      return { ...state, ...payload };
    case GET_MORE_IN_CURRENT_CATEGORY.PANDING:
      return { ...state, ...payload };
    case GET_MORE_IN_CURRENT_CATEGORY.SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
