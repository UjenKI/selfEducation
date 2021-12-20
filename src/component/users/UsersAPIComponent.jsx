import React, { Component } from 'react';

import * as axios from 'axios';

import Users from './Users';

import userPhoto from '../../img/Tony.png';

import style from './Users.module.css';

export default class UsersAPIComponent extends Component {
    constructor(props){
        super(props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers( res.data.items );
            this.props.setUsersTotalCount( res.data.totalCount );
        })
    }

    onPageChenged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers( res.data.items );
            // console.log(this.props.users)
        })
    }

    render(){
        return (
            <Users 
                totalUsersCount = { this.props.totalUsersCount }
                pageSize = { this.props.pageSize }
                onPageChenged = { this.onPageChenged }
                currentPage = { this.props.currentPage }
                users = { this.props.users }
                follow = { this.props.follow }
                unFollow = { this.props.unFollow }
            />
        )
    }
}
