import { GET_CATEGORIES, SELECT_CURRENT_CATEGORY } from "../constants";

export const getCategoris = () => async dispatch => {
  try {
    dispatch({ type: GET_CATEGORIES.PANDING, payload: result });
    const response = await fetch("https://api.thecatapi.com/v1/categories");
    const result = await response.json();
    dispatch({ type: GET_CATEGORIES.SUCCESS, payload: result });
  } catch (error) {
    dispatch({ type: GET_CATEGORIES.ERROR, payload: error });
  }
};

export const sellectCategory = payload => {
  const category = { ...payload };
  const categoryNameUpperCase =
    category.name[0].toUpperCase() + category.name.slice(1);
  category.name = categoryNameUpperCase;
  return {
    type: SELECT_CURRENT_CATEGORY,
    payload: category
  };
};
