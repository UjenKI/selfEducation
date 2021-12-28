import React from 'react';
import { connect } from 'react-redux';
import AllPosts from './allPosts';
import { addPostActionCreater, postTextValueActionCreater } from '../../../redux/profileReducer';

// const AllPostsContainer = (props) => {
 
//     let state = props.store.getState().profilePage;

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreater());
//     }

//     let postTextValue = (postText) => {
//         let action = postTextValueActionCreater(postText);
//         props.store.dispatch(action);
//     } 

//     return (
//         <AllPosts addPost={addPost} postTextValue={postTextValue} state={state}/>
//     )
// }

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        postTextValue: (postText) => {
            dispatch(postTextValueActionCreater(postText))
        }
    }
}

const AllPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AllPosts)

export default AllPostsContainer;