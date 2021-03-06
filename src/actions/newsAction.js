import axios from "axios";
import { AUTH } from "../keys";
import {
  FETCH_EVERYTHING,
  EVERYTHING_LOADING,
  FETCH_HEADLINES,
  HEADLINES_LOADING,
} from "./types";

export const fetchEverything = () => (dispatch) => {
  dispatch(setEverythingLoading());
  axios
    .get(
      "https://newsapi.org/v2/everything?q=all&pageSize=100&sortBy=publishedAt&language=en",
      {
        headers: {
          Authorization: `Basic ${AUTH}`,
        },
      }
    )
    .then((res) => {
      dispatch({
        type: FETCH_EVERYTHING,
        payload: res.data.articles,
      });
    });
};

export const setEverythingLoading = () => {
  return {
    type: EVERYTHING_LOADING,
  };
};

export const fetchHeadlines = () => (dispatch) => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?q=all&pageSize=100&language=en&sortBy=publishedAt",
      {
        headers: {
          Authorization: `Basic ${AUTH}`,
        },
      }
    )
    .then((res) => {
      dispatch({
        type: FETCH_HEADLINES,
        payload: res.data.articles,
      });
    });
};

export const setHeadlinesLoading = () => {
  return {
    type: HEADLINES_LOADING,
  };
};
