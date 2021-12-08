const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

const dialogsPageReducer = (state, action) => {
    switch(action.type){
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;
        case SEND_NEW_MESSAGE: 
            let messageBody = {id: 4, text: state.newMessageText};
            state.newMessageText = '';
            state.messages.push(messageBody);
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: SEND_NEW_MESSAGE});
export const messageTextValueActionCreator = (message) => ({type: UPDATE_MESSAGE_TEXT, message: message});
export default dialogsPageReducer;