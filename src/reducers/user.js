import { SUBMIT_LOGIN_FORM } from '../actions/ActionTypes';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_LOGIN_FORM:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
