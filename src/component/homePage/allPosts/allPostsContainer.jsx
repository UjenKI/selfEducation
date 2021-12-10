import React from 'react';
import style from './allPosts.module.css';
import Post from './post';
import AllPosts from './allPosts';
import { addPostActionCreater, postTextValueActionCreater } from '../../../redux/profileReducer';

const AllPostsContainer = (props) => {
 
    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreater());
    }

    let postTextValue = (postText) => {
        let action = postTextValueActionCreater(postText);
        props.store.dispatch(action);
    }

    return (
        <AllPosts addPost={addPost} postTextValue={postTextValue} state={state}/>
    )
}

export default AllPostsContainer;