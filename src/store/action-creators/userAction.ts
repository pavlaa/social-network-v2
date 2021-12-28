import {UserActionTypes, UsersAction} from "../../types/usersTypes";
import {Dispatch} from "redux";
import axios from "axios";
import {UsersData} from "../../types/types";

export const fetchUsers = (currentPage: number, limit: number) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS})
      const response = await axios.get<UsersData>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${limit}`, {
        withCredentials: true,
        headers: {
          "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d"
        }
      })
      let {items: users, totalCount: totalUsers} = response.data;
      dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: {users, totalUsers}})
    } catch (e) {
      dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: "ERROR"})
    }
  }
}
export const setUsersPage = (page: number): UsersAction => {
  return {type:UserActionTypes.SET_USERS_PAGE, payload: page}
}
