const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
        posts: [
            {id: 1, postText: "hi, it's my first post)", likeCount: 1},
            {id: 2, postText: "HAve some news for u!", likeCount: 3},
            {id: 3, postText: "look at this > (.)(.) ...", likeCount: 2},
            {id: 4, postText: "hi, it's my last post)", likeCount: 5},
        ],
        postText: '',
        profile: null
    }

const profilePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:{
            let newPostMessage = {
                id: state.posts.length+1,
                postText: state.postText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [ ...state.posts, newPostMessage ],
                postText: ''
            }
        }
        case UPDATE_POST_TEXT:{
            return {
                ...state,
                postText: action.postText
            }
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreater = () => ({type: ADD_POST});
export const postTextValueActionCreater = (text) => ({type: UPDATE_POST_TEXT, postText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profilePageReducer;