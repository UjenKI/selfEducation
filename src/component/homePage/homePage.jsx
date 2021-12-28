import React from 'react';
import Profile from './profile';
import AllPostsContainer from './allPosts/allPostsContainer';
import style from './homePage.module.css';

const HomePage = (props) => {
    console.log(props);
    return (
        <div className={style.content__wrapper}>
            <div className={style.content__item}>
                <h2>HomePage</h2>
                <Profile profile={props.profile}/>
                <AllPostsContainer />
            </div>
        </div>
    )
}

export default HomePage;