import React from 'react';
import ChatPage from './chatPage';
import { addMessageActionCreator, messageTextValueActionCreator } from '../../redux/dialogsReducer';


const ChatPageContainer = (props) => {

    let state = props.store.getState().dialogsPage;
    console.log(state);

    let createMsg = () => {
        console.log(props)
        props.store.dispatch(addMessageActionCreator());
    }

    let updateMessageText = (messageText) => {
        let action = messageTextValueActionCreator(messageText);
        props.store.dispatch(action);
    }

    return (
       <ChatPage updateMessageText={ updateMessageText } createMsg = { createMsg } state = { state }/> 
    )
}

export default ChatPageContainer;