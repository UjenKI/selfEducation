import React from 'react';
import Profile from './profile';
import AllPosts from './allPosts';
import style from './homePage.module.css';

const HomePage = (props) => {
    console.log(props)
    return (
        <div className={style.content__wrapper}>
            <div className={style.content__item}>
                <h2>HomePage</h2>
                <Profile state={props}/>
                <AllPosts 
                    state={props.state} 
                    dispatch = { props.dispatch }/>
            </div>
        </div>
    )
}

export default HomePage;