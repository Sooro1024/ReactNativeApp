import {
  GET_CAT_PHOTOS_BY_CATEGORY_ID,
  GET_MORE_IN_CURRENT_CATEGORY_SUCCESS
} from "../constants";

const initialState = {
  error: null,
  catPhotos: null,
  panding: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CAT_PHOTOS_BY_CATEGORY_ID.ERROR:
      return { ...state, error: payload, panding: false };
    case GET_CAT_PHOTOS_BY_CATEGORY_ID.PANDING:
      return { ...state, panding: true, error: null };
    case GET_CAT_PHOTOS_BY_CATEGORY_ID.SUCCESS:
      return { ...state, panding: false, catPhotos: payload };
    case GET_MORE_IN_CURRENT_CATEGORY_SUCCESS:
      return {
        ...state,
        panding: false,
        catPhotos: [...state.catPhotos, ...payload]
      };
    default:
      return state;
  }
};
