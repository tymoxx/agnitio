//Types
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

//Actions
export const authActions = Object.freeze({
  login: () => ({
    type: LOGIN,
  }),

  loginSuccess: () => ({
    type: LOGIN_SUCCESS,
  }),

  loginFail: (error) => ({
    type:    LOGIN_FAIL,
    payload: error,
    error:   true,
  }),
});
