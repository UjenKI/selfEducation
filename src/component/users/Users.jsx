import React from 'react';

import userPhoto from '../../img/Tony.png';

import style from './Users.module.css';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    pagesCount = 12;

    const paginationPages = [];

    for (let i = 1; i <= pagesCount; i++) {
        paginationPages.push(i);
    }

    const paginationElem = paginationPages.map(p => {
        return <li key={p} onClick={() => props.onPageChenged(p)} className={props.currentPage === p && style.activePage}><span>{p}</span></li>
    })

    const userList = props.users.map((user) => {
        return (
            <li key={user.id} className={style.userItem}>
                <div className={style.photoWrapper}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="img" />
                </div>
                <div className={style.userInfo}>
                    <p>Name: {user.name}</p>
                    <p>Status: {user.status !== null ? user.status : 'smauraj'}</p>
                    {/* <p>{user.location.country}</p>
                    <p>{user.location.city}</p> */}
                    {user.followed ? <button className={style.follow_btn} onClick={() => { props.unFollow(user.id) }}>Unfollow</button>
                        : <button className={style.follow_btn} onClick={() => { props.follow(user.id) }}>Follow</button>}
                </div>
            </li>
        )
    })

    return (
        <div className={style.usersWrapper}>
            <h2>USERS LIST</h2>
            <ul className={style.paginationList}>
                {paginationElem}
            </ul>
            <ul className={style.usersList}>
                {userList}
            </ul>
        </div>
    )
}

export default Users;