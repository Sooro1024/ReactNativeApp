import {
  GET_CAT_PHOTOS_BY_CATEGORY_ID,
  GET_MORE_IN_CURRENT_CATEGORY
} from "../constants";

export const getPhotosByCategoryId = () => async (dispatch, getState) => {
  const {
    categories: { currentCategory }
  } = getState();

  try {
    dispatch({ type: GET_CAT_PHOTOS_BY_CATEGORY_ID.PANDING });
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?category_ids=${currentCategory}&limit=10`
    );
    const data = await response.json();
    dispatch({ type: GET_CAT_PHOTOS_BY_CATEGORY_ID.SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CAT_PHOTOS_BY_CATEGORY_ID.ERROR, payload: error });
  }
};

export const getMorePhotosByCategoryId = () => async (dispatch, getState) => {
  const {
    categories: { currentCategory }
  } = getState();

  try {
    dispatch({ type: GET_MORE_IN_CURRENT_CATEGORY.PANDING });
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?category_ids=${currentCategory}&limit=10`
    );
    const data = await response.json();
    dispatch({ type: GET_MORE_IN_CURRENT_CATEGORY.SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_MORE_IN_CURRENT_CATEGORY.ERROR, payload: error });
  }
};
