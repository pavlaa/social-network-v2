import {UserActionTypes, UsersAction, UsersState} from "../../types/usersTypes";


const defaultState: UsersState = {
  users: [],
  loading: false,
  error: null,
  totalUsers: 0,
  currentPage: 1,
  limit: 4,
  portionSize: 10,
  followingProgress: []
}

export const userReducer = (state = defaultState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {...state, loading: true, error: null};
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {...state, loading: false, error: null, users: action.payload.users, totalUsers: action.payload.totalUsers};
    case UserActionTypes.FETCH_USERS_ERROR:
      return {...state, loading: false, error: action.payload};
    case UserActionTypes.SET_USERS_PAGE:
      return {...state, loading: false, currentPage: action.payload};
    case UserActionTypes.FOLLOW:
      return {...state, users: state.users.map(user => {
          if (user.id === action.payload) {
            return {...user, followed: true}
          }
          return user
        })};
    case UserActionTypes.UNFOLLOW:
      return {...state, users: state.users.map(user => {
          if (user.id === action.payload) {
            return {...user, followed: false}
          }
          return user
        })};
    case UserActionTypes.SET_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.payload.isFetching
          ? [...state.followingProgress, action.payload.id]
          : state.followingProgress.filter(id => id != action.payload.id)
      };
    default:
      return state;
  }
}