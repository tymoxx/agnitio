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
});
