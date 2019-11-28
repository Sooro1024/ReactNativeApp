import { GET_CATEGORIES } from "../constants";

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
