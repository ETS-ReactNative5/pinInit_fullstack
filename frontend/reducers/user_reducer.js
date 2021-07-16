import { RECEIVE_USER } from '../actions/user_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, action.user)
            // return action.user;
        default:
            return state;
    }
};


