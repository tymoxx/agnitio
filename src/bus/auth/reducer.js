//instruments
import { LOGIN, LOGIN_SUCCESS } from "./actions";

const initialState = {
  authenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case LOGIN:
      return {
        ...state,
        authenticated: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true
      };

    default:
      return state;
  }
};
