import {UserActionTypes, UsersAction, UsersState} from "../../types/usersTypes";


const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  totalUsers: 0,
  currentPage: 1,
  limit: 4
}

export const userReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {...state, loading: true, error: null};
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {...state, loading: false, error: null, users: action.payload.users, totalUsers: action.payload.totalUsers};
    case UserActionTypes.FETCH_USERS_ERROR:
      return {...state, loading: false, error: action.payload};
    case UserActionTypes.SET_USERS_PAGE:
      return {...state, loading: false, currentPage: action.payload};
    default:
      return state;
  }
}