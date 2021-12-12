import React from 'react';

import style from './Users.module.css';

const Users = (props) => {
    console.log(props.users.length)
    if(props.users.length === 0){
        props.setUsers([
            {id: 1, imgUrl: 'https://www.pngarts.com/explore/153009',nickName: 'Nikita', followed: false, status: 'IT-samuraj', location: {country: 'USA', city: 'LA'}},
            {id: 2, imgUrl: '',nickName: 'NickJKL', followed: false, status: 'IT-samuraj', location: {country: 'Ukraine', city: 'Kyiv'}},
            {id: 3, imgUrl: '',nickName: 'NataliPt', followed: false, status: 'IT-samuraj', location: {country: 'OAE', city: 'Dubai'}},
            {id: 4, imgUrl: '',nickName: 'TonyStark', followed: false, status: 'IT-samuraj', location: {country: 'USA', city: 'Miami'}}
        ])
    }
    // console.log(props.users)
    let userList = props.users.map((user) => {
        return (
            <li key={user.id} className={ style.userItem }>
                <div className={style.photoWrapper}>
                    <img src={user.imgUrl} alt="img"/>
                </div>
                <div className={ style.userInfo }>
                    <p>{user.nickName}</p>
                    <p>{user.status}</p>
                    <p>{user.location.country}</p>
                    <p>{user.location.city}</p>
                    {user.followed ? <button onClick = { () => {props.unFollow(user.id)} }>Unfollow</button>
                                   : <button onClick = { () => {props.follow(user.id)} }>Follow</button>}
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