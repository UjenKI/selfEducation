import React, { Component } from 'react';

import * as axios from 'axios';

import userPhoto from '../../img/Tony.png';

import style from './Users.module.css';

export default class Users extends Component {
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        pagesCount = 12;

        const paginationPages = [];

        for(let i = 1; i <= pagesCount; i++){
            paginationPages.push(i);
        }

        const paginationElem = paginationPages.map(p => {
        return <li onClick={() => this.onPageChenged(p)} className={this.props.currentPage === p && style.activePage }><span>{p}</span></li>
        })

        const userList = this.props.users.map((user) => {
            return (
                <li key={user.id} className={ style.userItem }>
                    <div className={style.photoWrapper}>
                        <img src={ user.photos.small !== null ? user.photos.small : userPhoto} alt="img"/>
                    </div>
                    <div className={ style.userInfo }>
                        <p>Name: {user.name}</p>
                        <p>Status: {user.status !== null ? user.status : 'smauraj'}</p>
                        {/* <p>{user.location.country}</p>
                        <p>{user.location.city}</p> */}
                        {user.followed ? <button className={style.follow_btn} onClick = { () => {this.props.unFollow(user.id)} }>Unfollow</button>
                                    : <button className={style.follow_btn} onClick = { () => {this.props.follow(user.id)} }>Follow</button>}
                    </div>
                </li>
            )
        }) 
        return (
            <div className={style.usersWrapper}>
                <h2>USERS LIST</h2>
                <ul className={style.paginationList}>
                    { paginationElem }
                </ul>
                <ul className={ style.usersList }>
                    { userList }
                </ul>
            </div>
        )
    }
}
