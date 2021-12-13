import React from 'react';

import * as axios from 'axios';

import userPhoto from '../../img/Tony.png';

import style from './Users.module.css';

const Users = (props) => {
    console.log(props.users.length)
    if(props.users.length === 0){
        // props.setUsers([
        //     {id: 1, imgUrl: 'https://www.pngarts.com/explore/153009',nickName: 'Nikita', followed: false, status: 'IT-samuraj', location: {country: 'USA', city: 'LA'}},
        //     {id: 2, imgUrl: '',nickName: 'NickJKL', followed: false, status: 'IT-samuraj', location: {country: 'Ukraine', city: 'Kyiv'}},
        //     {id: 3, imgUrl: '',nickName: 'NataliPt', followed: false, status: 'IT-samuraj', location: {country: 'OAE', city: 'Dubai'}},
        //     {id: 4, imgUrl: '',nickName: 'TonyStark', followed: false, status: 'IT-samuraj', location: {country: 'USA', city: 'Miami'}}
        // ])

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            props.setUsers( res.data.items);
        })

    }
    // console.log(props.users)
    let userList = props.users.map((user) => {
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
                    {user.followed ? <button className={style.follow_btn} onClick = { () => {props.unFollow(user.id)} }>Unfollow</button>
                                   : <button className={style.follow_btn} onClick = { () => {props.follow(user.id)} }>Follow</button>}
                </div>
            </li>
        )
    })
    return (
        <div className={style.usersWrapper}>
            <h2>USERS LIST</h2>
            <ul className={ style.usersList }>
                {userList}
            </ul>
        </div>
    )
}

export default Users;