import React from 'react';
import style from './allPosts.module.css';
import Post from './post';
const AllPosts = (props) => {
 
    let state = props.state;

    let posts = state.posts.map( post => <Post text={post.postText} likeCount={post.likeCount}/>)

    let postValue = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onChangePostTextValue = () => {
        let postText = postValue.current.value;
        props.postTextValue(postText);

    }

    return (
        <div className={style.posts__list}>
            <h2>All posts</h2>
            <div className={style.createPost}>
                <textarea onChange={ onChangePostTextValue } name="post" ref={ postValue } cols="30" rows="10" value={ state.postText }></textarea>
                <button onClick={ onAddPost } className={style.createPostBtn}>Create Post</button>
            </div>
            { posts }
        </div>
    )
}

export default AllPosts;