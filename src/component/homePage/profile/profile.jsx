import React from 'react';

import avatar from '../../../img/anonim.jpeg';

import style from './profile.module.css';

const Profile = () => {
    return (
        <div className={style.profile__wrapper}>
            <h2>Profile</h2>
            <div className={style.profile__item}>
                <div className={style.img__profile}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={style.profile__description}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus provident vitae tempore deleniti. Sint nisi dolorem minus fuga, rem id perspiciatis ullam quidem illo, aspernatur vero in consequuntur quos cumque.</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
