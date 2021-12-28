import React from 'react';

import avatar from '../../../img/anonim.jpeg';
import Loader from '../../loader';

import style from './profile.module.css';

const Profile = (props) => {
    if(!props.profile){
        return <Loader />
    }
    return (
        <div className={style.profile__wrapper}>
            <h2>Profile</h2>
            <div className={style.profile__item}>
                <div className={style.img__profile}>
                    <img src={props.profile.photos.small} alt="avatar"/>
                </div>
                <div className={style.fullName}>
                    <p>{props.profile.fullName}</p>
                </div>
                <div className={style.profile__description}>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
