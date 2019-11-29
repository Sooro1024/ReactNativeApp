import {
  GET_CAT_PHOTOS_BY_CATEGORY_ID,
  GET_MORE_IN_CURRENT_CATEGORY_SUCCESS
} from "../constants";

export const getPhotosByCategoryId = more => async (dispatch, getState) => {
  const {
    categories: {
      currentCategory: { id }
    }
  } = getState();

  try {
    dispatch({ type: GET_CAT_PHOTOS_BY_CATEGORY_ID.PANDING });
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?category_ids=${id}&limit=10`
    );
    const data = await response.json();
    if (more === true) {
      dispatch({ type: GET_MORE_IN_CURRENT_CATEGORY_SUCCESS, payload: data });
    } else {
      dispatch({ type: GET_CAT_PHOTOS_BY_CATEGORY_ID.SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: GET_CAT_PHOTOS_BY_CATEGORY_ID.ERROR, payload: error });
  }
};
