import React, { Component } from 'react';

import * as axios from 'axios';

import userPhoto from '../../img/Tony.png';

import style from './Users.module.css';

export default class Users extends Component {
    constructor(props){
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsers( res.data.items );
        })
    }
    render(){
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
                <ul className={ style.usersList }>
                    { userList }
                </ul>
            </div>
        )
    }
}
