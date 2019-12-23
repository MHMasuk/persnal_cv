import { combineReducers } from 'redux';

import UserReducers from './UserReducers/UserReducers';


const rootReducer = combineReducers({
    users: UserReducers
})

export default rootReducer;