let reRenderComponent = () => {
    console.log('state update');
}

let state = {
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
}

export const addPost = () => {
    let newPostMessage = {
        id: state.profilePage.profile.posts.length++,
        postText: state.profilePage.profile.postText,
        likeCount: 0
    }

    state.profilePage.profile.posts.push(newPostMessage);

    state.profilePage.profile.postText = '';
    reRenderComponent(state);
    console.log(state.profilePage.profile)
}

export const updatePostText = (postText) => {
    state.profilePage.profile.postText = postText;
    reRenderComponent(state);
}

export const subscribe = (observer) => {
    reRenderComponent = observer;
}



export default state;