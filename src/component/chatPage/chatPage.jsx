import React from 'react';
import ChatPageItem from './chatPageItem';
import Message from './message';
import { addMessageActionCreator, messageTextValueActionCreator } from '../../redux/dialogsReducer';

import style from './chatPage.module.css';


const ChatPage = (props) => {
    let chats = props.state.chats.map( chat => <ChatPageItem id={chat.id} chatName={chat.name} />);
    let messages = props.state.messages.map( msg => <Message message={msg.text}/>);

    let msgValue = React.createRef();

    let createMsg = () => {
        console.log(props)
        props.dispatch(addMessageActionCreator());
    }

    let updateMessageText = (e) => {
        let messageText = e.target.value;
        let action = messageTextValueActionCreator(messageText);
        props.dispatch(action);
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
                        <textarea onChange={ updateMessageText } value={ props.state.newMessageText } ref={ msgValue }></textarea>
                        <button onClick={ createMsg } className={ style.sendMsgBtn }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;