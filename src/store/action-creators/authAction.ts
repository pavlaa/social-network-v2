import {Dispatch} from "redux";
import {AuthAction, AuthActionTypes} from "../../types/authTypes";
import axios from "axios";
import {LoginDataTypes} from "../../types/types";

export const AuthFetch = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
      headers: {
        "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d"
      }
    })
    debugger
    if (response.data.resultCode === 0) {
      dispatch({type: AuthActionTypes.FETCH_AUTH_DATA, payload: {...response.data.data, isLogin: true}})
    }
    dispatch({type: AuthActionTypes.INITIALIZED_SUCCESS})
  }
}

export const GetLogin = ({email, password, rememberMe}: LoginDataTypes) => {
  return async (dispatch: any) => {
    const response = await axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`,
      {email, password, rememberMe},
      {
        withCredentials: true,
        headers: {
          "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d"
        },
      })
    debugger
    if (response.data.resultCode === 0) {
      dispatch(AuthFetch())
    } else {}
  }
}