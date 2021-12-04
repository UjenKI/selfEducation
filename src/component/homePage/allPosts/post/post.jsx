import React from 'react';
import style from './post.module.css';

const Post = (props) => {
    return (
        <div className={style.post__item}>
            <h2>{props.text}</h2>
    <span>likes: {props.likeCount}</span>
        </div>
    )
}

export default Post; 