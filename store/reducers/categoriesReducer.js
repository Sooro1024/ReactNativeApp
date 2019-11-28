import { GET_CATEGORIES } from "../constants";

const initialState = {
  categoriesList: undefined,
  panding: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES.ERROR:
      return { ...state, error: payload, panding: false };
    case GET_CATEGORIES.PANDING:
      return { ...state, panding: true };
    case GET_CATEGORIES.SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        categoriesList:
          state.categoriesList === undefined
            ? payload
            : [...state.categoriesList, ...payload]
      };
    default:
      return state;
  }
};
