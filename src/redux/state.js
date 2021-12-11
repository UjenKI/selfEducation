import profilePageReducer from './profileReducer';
import dialogsPageReducer from './dialogsReducer';

let store = {
    _state: {
        profilePage: {
                posts: [
                    {id: 1, postText: "hi, it's my first post)", likeCount: 1},
                    {id: 2, postText: "HAve some news for u!", likeCount: 3},
                    {id: 3, postText: "look at this > (.)(.) ...", likeCount: 2},
                    {id: 4, postText: "hi, it's my last post)", likeCount: 5},
                ],
                postText: ''
        },
        dialogsPage: {
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
        },
        sideBar:{}
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('state update');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage.profile = profilePageReducer(this._state.profilePage.profile, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}





window.store = store;
export default store;