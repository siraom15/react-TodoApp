import { combineReducers } from 'redux'
import todos from './todoReducer'
import { firebaseReducer as firebase } from 'react-redux-firebase'
export default combineReducers({
    todos,
    firebase
})