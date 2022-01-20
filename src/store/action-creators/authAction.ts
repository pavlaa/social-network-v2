import {Dispatch} from "redux";
import {AuthAction, AuthActionTypes} from "../../types/authTypes";
import axios from "axios";
import {LoginDataTypes} from "../../types/types";
import {stopSubmit} from "redux-form";

export const AuthFetch = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
      headers: {
        "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d"
      }
    })
    if (response.data.resultCode === 0) {
      dispatch({type: AuthActionTypes.FETCH_AUTH_DATA, payload: {...response.data.data, isLogin: true}})
    }
    dispatch({type: AuthActionTypes.INITIALIZED_SUCCESS})
  }
}

export const GetLogin = ({email, password, rememberMe, captcha}: LoginDataTypes) => {
  return async (dispatch: any) => {
    const response = await axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`,
      {email, password, rememberMe, captcha},
      {
        withCredentials: true,
        headers: {
          "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d"
        }
      })
    debugger
    if (response.data.resultCode === 0) {
      dispatch(AuthFetch())
    } else if (response.data.resultCode === 10){
      dispatch(GetCaptchaUrl())
    }
    const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const GetLogout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`,
      {
        withCredentials: true,
        headers: {
          "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d"
        }
      })
    if (response.data.resultCode === 0) {
      dispatch({type: AuthActionTypes.GET_LOGOUT})
    }

  }
}

export const GetCaptchaUrl = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/security/get-captcha-url`,
      {
        withCredentials: true,
        headers: {
          "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d"
        }
      })
    let url = response.data.url
    dispatch({type: AuthActionTypes.GET_CAPTCHA_URL, payload: {captchaUrl: url}})
  }
}