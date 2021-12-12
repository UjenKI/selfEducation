const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {id: 1, imgUrl: 'https://www.pngarts.com/explore/153009',nickName: 'Nikita', followed: false, status: 'IT-samuraj', location: {country: 'USA', city: 'LA'}},
        // {id: 2, imgUrl: '',nickName: 'NickJKL', followed: false, status: 'IT-samuraj', location: {country: 'Ukraine', city: 'Kyiv'}},
        // {id: 3, imgUrl: '',nickName: 'NataliPt', followed: false, status: 'IT-samuraj', location: {country: 'OAE', city: 'Dubai'}},
        // {id: 4, imgUrl: '',nickName: 'TonyStark', followed: false, status: 'IT-samuraj', location: {country: 'USA', city: 'Miami'}}
    ]
}

const usersPageReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userId){
                        return {
                            ...user,
                            followed:true
                        }
                    }
                    return user
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userId){
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }
        }
        case SET_USERS:{
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default: return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type:SET_USERS, users});

export default usersPageReducer;