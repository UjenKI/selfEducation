import React from 'react';
import style from './allPosts.module.css';
import Post from './post';
import { addPostActionCreater, postTextValueActionCreater } from '../../../redux/state';

const AllPosts = (props) => {

    console.log(props);

    let posts = props.state.posts.map( post => <Post text={post.postText} likeCount={post.likeCount}/>)

    let postValue = React.createRef();

    

    let addPost = () => {
        props.dispatch(addPostActionCreater())
        // postValue.current.value = props.p
    }

    let postTextValue = () => {
        let postText = postValue.current.value;
        let action = postTextValueActionCreater(postText);
        props.dispatch(action);
    }

    return (
        <div className={style.posts__list}>
            <h2>All posts</h2>
            <div className={style.createPost}>
                <textarea onChange={ postTextValue } name="post" ref={ postValue } cols="30" rows="10" value={ props.state.postText }></textarea>
                <button onClick={ addPost } className={style.createPostBtn}>Create Post</button>
            </div>
            { posts }
        </div>
    )
}

export default AllPosts;