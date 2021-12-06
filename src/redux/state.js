let store = {
    _state: {
        profilePage: {
            profile: {
                posts: [
                    {id: 1, postText: "hi, it's my first post)", likeCount: 1},
                    {id: 2, postText: "HAve some news for u!", likeCount: 3},
                    {id: 3, postText: "look at this > (.)(.) ...", likeCount: 2},
                    {id: 4, postText: "hi, it's my last post)", likeCount: 5},
                ],
                postText: ''
            }
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
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('state update');
    },
    // addPost(){
    //     let newPostMessage = {
    //         id: this._state.profilePage.profile.posts.length++,
    //         postText: this._state.profilePage.profile.postText,
    //         likeCount: 0
    //     }
    //     this._state.profilePage.profile.posts.push(newPostMessage);
    //     this._state.profilePage.profile.postText = '';
    //     this._callSubscriber(this._state);
    //     console.log(this._state.profilePage.profile)
    // },
    // updatePostText(postText){
    //     this._state.profilePage.profile.postText = postText;
    //     this._callSubscriber(this._state);
    // },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPostMessage = {
                id: this._state.profilePage.profile.posts.length++,
                postText: this._state.profilePage.profile.postText,
                likeCount: 0
            }
            this._state.profilePage.profile.posts.push(newPostMessage);
            this._state.profilePage.profile.postText = '';
            this._callSubscriber(this._state);
            console.log(this._state.profilePage.profile)
        } else if(action.type === 'UPDATE-POST-TEXT'){
            this._state.profilePage.profile.postText = action.postText;
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;
export default store;