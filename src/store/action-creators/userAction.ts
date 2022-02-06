import { UserActionTypes, UsersAction } from "../../types/usersTypes";
import { Dispatch } from "redux";
import { UsersAPI } from "../../API";

export const fetchUsers = (currentPage: number, limit: number) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS })
      const response = await UsersAPI.getUsers(currentPage, limit);
      let { items: users, totalCount: totalUsers } = response.data;
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: { users, totalUsers } })
    } catch (e) {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "ERROR" })
    }
  }
}

export const setUsersPage = (page: number): UsersAction => {
  return { type: UserActionTypes.SET_USERS_PAGE, payload: page }
}

export const followUser = (userID: number) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    dispatch({ type: UserActionTypes.SET_FOLLOWING_PROGRESS, payload: { id: userID, isFetching: true } })
    const response = await UsersAPI.follow(userID)
    dispatch({ type: UserActionTypes.SET_FOLLOWING_PROGRESS, payload: { id: userID, isFetching: false } })
    if (response.data.resultCode === 0) {
      dispatch({ type: UserActionTypes.FOLLOW, payload: userID });
    }
  }
}
export const unfollowUser = (userID: number) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    dispatch({ type: UserActionTypes.SET_FOLLOWING_PROGRESS, payload: { id: userID, isFetching: true } })
    const response = await UsersAPI.unfollow(userID)
    dispatch({ type: UserActionTypes.SET_FOLLOWING_PROGRESS, payload: { id: userID, isFetching: false } })
    if (response.data.resultCode === 0) {
      dispatch({ type: UserActionTypes.UNFOLLOW, payload: userID });
    }
  }
}
