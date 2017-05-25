import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

import { RECEIVE_RATING_ERRORS } from '../actions/review_actions';

const ErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return [...action.errors];
    case RECEIVE_RATING_ERRORS:
      return [action.errors];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
