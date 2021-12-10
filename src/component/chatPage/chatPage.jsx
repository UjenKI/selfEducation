import React from 'react';
import ChatPageItem from './chatPageItem';
import Message from './message';
import { addMessageActionCreator, messageTextValueActionCreator } from '../../redux/dialogsReducer';

import style from './chatPage.module.css';


const ChatPage = (props) => {
    console.log(props)
    let chats = props.state.chats.map( chat => <ChatPageItem id={chat.id} chatName={chat.name} />);
    let messages = props.state.messages.map( msg => <Message message={msg.text}/>);

    let msgValue = React.createRef();

    let onCreateMsg = () => {
        props.createMsg();
    }

    let onUpdateMessageText = (e) => {
        let messageText = e.target.value;
        props.updateMessageText(messageText);
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
                        <textarea onChange={ onUpdateMessageText } value={ props.state.newMessageText } ref={ msgValue }></textarea>
                        <button onClick={ onCreateMsg } className={ style.sendMsgBtn }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;