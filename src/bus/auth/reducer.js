//instruments
import { LOGIN, LOGIN_SUCCESS } from "./actions";

const initialState = {
  authenticated: false,
  user: {
    "username": "lueilwitz.casimir",
    "email": "bauch.lionel@example.org",
    "first_name": "Anya",
    "last_name": "Swift",
    "title": "Prof.",
    "active": false,
    "id": 3,
  }
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
