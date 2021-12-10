import React from 'react';
import Profile from './profile';
import AllPostsContainer from './allPosts/allPostsContainer';
import style from './homePage.module.css';

const HomePage = (props) => {
    return (
        <div className={style.content__wrapper}>
            <div className={style.content__item}>
                <h2>HomePage</h2>
                <Profile state={props.store}/>
                <AllPostsContainer store = { props.store } />
            </div>
        </div>
    )
}

export default HomePage;