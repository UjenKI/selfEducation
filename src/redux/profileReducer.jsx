const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
        posts: [
            {id: 1, postText: "hi, it's my first post)", likeCount: 1},
            {id: 2, postText: "HAve some news for u!", likeCount: 3},
            {id: 3, postText: "look at this > (.)(.) ...", likeCount: 2},
            {id: 4, postText: "hi, it's my last post)", likeCount: 5},
        ],
        postText: ''
    }

const profilePageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPostMessage = {
                id: state.posts.length++,
                postText: state.postText,
                likeCount: 0
            }
            state.posts.push(newPostMessage);
            state.postText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.postText = action.postText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreater = () => ({type: ADD_POST});
export const postTextValueActionCreater = (text) => ({type: UPDATE_POST_TEXT, postText: text});

export default profilePageReducer;