import { GET_CATEGORIES, SELECT_CURRENT_CATEGORY } from "../constants";

const initialState = {
  categoriesList: undefined,
  panding: true,
  error: null,
  fetchCounter: 0,
  currentCategory: { id: null, name: null }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES.ERROR:
      return { ...state, error: payload, panding: false };
    case GET_CATEGORIES.PANDING:
      return { ...state, panding: true, fetchCounter: state.fetchCounter + 1 };
    case GET_CATEGORIES.SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        categoriesList: payload
      };
    case SELECT_CURRENT_CATEGORY:
      return { ...state, currentCategory: payload };
    default:
      return state;
  }
};
