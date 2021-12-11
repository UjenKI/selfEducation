const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

let initialState = {
    chats: [
        {id: 1, name: 'Natali'},
        {id: 2, name: 'Vova'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Kolya'},
        {id: 5, name: 'Dima'},
        {id: 6, name: 'Vlad'}
    ],
    messages: [
        {id: 1, text: 'hi)'},
        {id: 2, text: 'Hello)'},
        {id: 3, text: 'How are you?)'},
    ],
    newMessageText: ''
}

const dialogsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_MESSAGE_TEXT:{
            return { 
                ...state,
                newMessageText: action.message
             }
        }
        case SEND_NEW_MESSAGE: {
            let messageBody = {id: state.messages.length+1, text: state.newMessageText};
            return { 
                ...state,
                messages: [...state.messages, messageBody],
                newMessageText: ''
             }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: SEND_NEW_MESSAGE});
export const messageTextValueActionCreator = (message) => ({type: UPDATE_MESSAGE_TEXT, message: message});
export default dialogsPageReducer;