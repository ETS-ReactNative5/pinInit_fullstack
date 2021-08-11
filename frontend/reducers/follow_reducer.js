import { RECEIVE_FOLLOW_STATUS, RECIEVE_USERS_FOLLOWING, RECIEVE_DELETE_MESSAGE } from '../actions/follow_action';

export default (state = {}, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FOLLOW_STATUS:
            return Object.assign({}, state, {followStatus: action.info})
        case RECIEVE_USERS_FOLLOWING:
            return Object.assign({}, state, {usersFollowing: action.UsersFollowInfo})
        case RECIEVE_DELETE_MESSAGE:
            return Object.assign({}, state, {delMessage: action.message})
        default:
            return state;

    }
};