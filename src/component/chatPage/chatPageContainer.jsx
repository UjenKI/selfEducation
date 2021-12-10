import React from 'react';
import { connect } from 'react-redux';
import ChatPage from './chatPage';
import { addMessageActionCreator, messageTextValueActionCreator } from '../../redux/dialogsReducer';


// const ChatPageContainer = (props) => {

//     let state = props.store.getState().dialogsPage;
//     console.log(state);

//     let createMsg = () => {
//         console.log(props)
//         props.store.dispatch(addMessageActionCreator());
//     }

//     let updateMessageText = (messageText) => {
//         let action = messageTextValueActionCreator(messageText);
//         props.store.dispatch(action);
//     }

//     return (
//        <ChatPage 
//             updateMessageText={ updateMessageText } 
//             createMsg = { createMsg } 
//             state = { state }/> 
//     )
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (message) => {
            dispatch(messageTextValueActionCreator(message));
        },
        createMsg: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const ChatPageContainer = connect(mapStateToProps, mapDispatchToProps)(ChatPage)

export default ChatPageContainer;