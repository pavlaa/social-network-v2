import { Dispatch } from "redux";
import { AuthAction, AuthActionTypes } from "../../types/authTypes";
import { LoginDataTypes } from "../../types/types";
import { stopSubmit } from "redux-form";
import { AuthAPI } from "../../API";

export const AuthFetch = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await AuthAPI.getAuth()
    if (response.data.resultCode === 0) {
      dispatch({ type: AuthActionTypes.FETCH_AUTH_DATA, payload: { ...response.data.data, isLogin: true } })
    }
    dispatch({ type: AuthActionTypes.INITIALIZED_SUCCESS })
  }
}

export const GetLogin = ({ email, password, rememberMe, captcha }: LoginDataTypes) => {
  return async (dispatch: any) => {
    const response = await AuthAPI.login({ email, password, rememberMe, captcha })
    if (response.data.resultCode === 0) {
      dispatch(AuthFetch())
    } else if (response.data.resultCode === 10) {
      dispatch(GetCaptchaUrl())
    }
    const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const GetLogout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await AuthAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch({ type: AuthActionTypes.GET_LOGOUT })
    }

  }
}

export const GetCaptchaUrl = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const response = await AuthAPI.getCaptchaUrl()
    let url = response.data.url
    dispatch({ type: AuthActionTypes.GET_CAPTCHA_URL, payload: { captchaUrl: url } })
  }
}