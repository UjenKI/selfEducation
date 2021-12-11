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
        case ADD_POST: {
            let newPostMessage = {
                id: state.posts.length+1,
                postText: state.postText,
                likeCount: 0
            }
            let stateCopy = {...state};
            
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPostMessage);
            stateCopy.postText = '';
            return stateCopy;
        }
        case UPDATE_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.postText = action.postText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreater = () => ({type: ADD_POST});
export const postTextValueActionCreater = (text) => ({type: UPDATE_POST_TEXT, postText: text});

export default profilePageReducer;