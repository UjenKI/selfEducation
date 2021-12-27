const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOGGLE_FETCHING = 'SET_TOGGLE_FETCHING';


let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            {
                return {
                    ...state,
                    users: state.users.map((user) => {
                        if (user.id === action.userId) {
                            return {
                                ...user,
                                followed: true
                            }
                        }
                        return user
                    })
                }
            }
        case UNFOLLOW:
            {
                return {
                    ...state,
                    users: state.users.map((user) => {
                        if (user.id === action.userId) {
                            return {
                                ...user,
                                followed: false
                            }
                        }
                        return user
                    })
                }
            }
        case SET_USERS:
            {
                return {
                    ...state,
                    users: action.users
                }
            }
        case SET_TOTAL_USERS_COUNT:
            {
                return {
                    ...state,
                    totalUsersCount: action.totalCount
                }
            }
        case SET_CURRENT_PAGE:
            {
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            }
        case SET_TOGGLE_FETCHING:
            {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setUsersTotalCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setToggleFetching = (isFetching) => ({ type: SET_TOGGLE_FETCHING, isFetching });

export default usersPageReducer;