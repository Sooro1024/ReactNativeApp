import {
  GET_CAT_PHOTOS_BY_CATEGORY_ID,
  GET_MORE_IN_CURRENT_CATEGORY
} from "../constants";

export const getMorePhotosInCurrentCategory = payload => async dispatch => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?category_ids=${payload}&limit=10`
  );
};

export const getPhotosByCategoryId = payload => ({
  type: GET_CAT_PHOTOS_BY_CATEGORY_ID,
  payload
});
