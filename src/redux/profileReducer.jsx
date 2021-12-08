const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profilePageReducer = (state, action) => {
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