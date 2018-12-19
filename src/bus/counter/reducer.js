//instruments
import { DECREMENT, INCREMENT } from "./actions";

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

      case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };

    // case types.SET_ONLINE_STATUS:
    //   return state.set('online', action.payload);
    //
    // case types.SET_AUTH_FETCHING_STATE:
    //   return state.set('authFetching', action.payload);
    //
    // case types.SET_FEED_FETCHING_STATE:
    //   return state.set('feedFetching', action.payload);

    default:
      return state;
  }
};
