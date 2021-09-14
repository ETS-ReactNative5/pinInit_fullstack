import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser, fetchUserProfile } from '../../actions/user_actions';
import { fetchBoards } from '../../actions/board_actions';
import UserShow from './show';
import { isFollowing, fetchUserFollowing, createFollow, deleteFollow } from '../../actions/follow_action'; 

import { openModal, closeModal } from '../../actions/modal';

const mSTP = state => {
    
    return {
        user: state.user,
        userProfile: state.user.profileUser,
        photo: state.photoUrl,
        boards: state.boards,
        follow: state.follow.usersFollowing,
    };
};

const mDTP = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    // return {
    fetchUserProfile: (userId) => {
        debugger
        return dispatch(fetchUserProfile(userId));
    },
    // fetchUser: (userId) => {
    //     return dispatch(fetchUser(userId));
    // },
    fetchBoards: (userId) => {

        return dispatch(fetchBoards(userId));
    },
    isFollowing: (info) => {
        // 
        return dispatch(isFollowing(info))
    },
    fetchUserFollowing: (userId) => {

        return dispatch(fetchUserFollowing(userId))
    },
    createFollow: followForm => dispatch(createFollow(followForm)),
    unfollowUser: deleteIds => dispatch(deleteFollow(deleteIds))
    // };
});


export default withRouter(connect(mSTP, mDTP)(UserShow));