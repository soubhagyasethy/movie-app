import { ADD_MOVIES } from "../actions";

const initilMovieState = {
  list: [],
  favourites: [],
};

export default function movies(state = initilMovieState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;
}
