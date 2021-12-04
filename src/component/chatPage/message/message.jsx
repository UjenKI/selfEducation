import React from 'react';

import style from './message.module.css';

const Message = (props) => {
    return (
        <div className={style.messages}>
            <p>{props.message}</p>
        </div>
    )
}

export default Message;