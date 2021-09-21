import { RECEIVE_USER, RECEIVE_USERS, RECEIVE_USER_PROFILE } from '../actions/user_actions';

export default (state = {}, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, action.user)
        case RECEIVE_USERS:
            return Object.assign({}, state, {searchUsers: action.users})
        case RECEIVE_USER_PROFILE:
            
            return Object.assign({}, state, {profileUser: action.userProfile})
        default:
            return state;
    }
};


