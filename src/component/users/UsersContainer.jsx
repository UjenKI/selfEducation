import React from 'react';
import { connect } from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';
import { follow, unFollow, setUsers, setUsersTotalCount, setCurrentPage, setToggleFetching } from '../../redux/usersReducer';

const mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setUsersTotalCount,
    setCurrentPage,
    setToggleFetching
})(UsersAPIComponent);

export default UsersContainer;
