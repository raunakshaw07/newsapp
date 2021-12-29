import {
  FETCH_EVERYTHING,
  EVERYTHING_LOADING,
  FETCH_HEADLINES,
  HEADLINES_LOADING,
} from "../actions/types";

const initialState = {
  everything: [],
  loadingEverything: false,
  headlines: [],
  loadingHeadlines: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVERYTHING:
      return {
        ...state,
        everything: action.payload,
        loadingEverything: false,
      };
    case EVERYTHING_LOADING:
      return {
        ...state,
        loadingEverything: true,
      };
    case FETCH_HEADLINES:
      return {
        ...state,
        headlines: action.payload,
        loadingHeadlines: false,
      };
    case HEADLINES_LOADING:
      return {
        ...state,
        loadingHeadlines: true,
      };

    default:
      return state;
  }
};

export default newsReducer;
