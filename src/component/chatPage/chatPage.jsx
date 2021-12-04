import React from 'react';
import ChatPageItem from './chatPageItem';
import Message from './message';
// import { NavLink } from 'react-router-dom';

import style from './chatPage.module.css';


const ChatPage = (props) => {
    let chats = props.state.chats.map( chat => <ChatPageItem id={chat.id} chatName={chat.name} />);
    let messages = props.state.messages.map( msg => <Message message={msg.text}/>);

    let msgValue = React.createRef();

    let createMsg = () => {
        console.log(msgValue.current.value);
    }

    return (
        <div className={style.chat__wrapper}>
            <h2>Chat component</h2>
            <div className={style.chat__column}>
                <div className={style.chat__list}>
                    <ul>
                        { chats }
                    </ul>
                </div>
                <div className={style.chat__item}>
                   { messages }
                   <div className={style.messageHere}>
                        <textarea ref={ msgValue } name="message" cols="30" rows="10"></textarea>
                        <button onClick={ createMsg } className={ style.sendMsgBtn }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;