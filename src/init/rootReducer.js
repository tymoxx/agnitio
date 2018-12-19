import { combineReducers } from 'redux'
import counter from '../bus/counter/reducer'
import authActions from '../bus/auth/reducer'

export default combineReducers({
    counter,
    authActions
});
