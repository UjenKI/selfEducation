import React from 'react';
import { connect } from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';
import { followAC, unFollowAC, setUsersAC, setTotalUsersCountAC, setCurrentPageAC, setToggleFetchingAC } from '../../redux/usersReducer';

const mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setToggleFetching: (isFetching) => {
            dispatch(setToggleFetchingAC(isFetching));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
