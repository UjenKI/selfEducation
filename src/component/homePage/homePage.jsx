import React from 'react';
import Profile from './profile';
import AllPosts from './allPosts';
import style from './homePage.module.css';

const HomePage = (props) => {
    return (
        <div className={style.content__wrapper}>
            <div className={style.content__item}>
                <h2>HomePage</h2>
                <Profile state={props.state.profile}/>
                <AllPosts 
                    state={props.state.profile} 
                    addPost={ props.addPost }
                    updatePostText={ props.updatePostText }/>
            </div>
        </div>
    )
}

export default HomePage;