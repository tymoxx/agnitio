//Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

//Actions
export const counterActions = Object.freeze({
  increment: () => ({
    type: INCREMENT,
  }),

  decrement: () => ({
    type: DECREMENT,
  }),

  // setOnlineStatus: (state) => ({
  //   type: types.SET_ONLINE_STATUS,
  //   payload: state,
  // }),
  //
  // setAuthFetchingState: (state) => ({
  //   type:    types.SET_AUTH_FETCHING_STATE,
  //   payload: state,
  // }),
  //
  // setFeedFetchingState: (state) => ({
  //   type:    types.SET_FEED_FETCHING_STATE,
  //   payload: state,
  // }),
});
