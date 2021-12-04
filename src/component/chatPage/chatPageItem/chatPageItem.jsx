import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './chatPageItem.module.css';

const ChatPageItem = (props) => {
    return (
        <li>
            <NavLink to={'/chatPage/' + props.id} className={style.chat__name}>{props.chatName}</NavLink>
        </li>
    )
}
export default ChatPageItem;