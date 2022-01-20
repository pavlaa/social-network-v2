import {AuthAction, AuthActionTypes, AuthState} from "../../types/authTypes";


const defaultState: AuthState = {
  isLogin: false,
  id: null,
  login: null,
  email: null,
  captchaUrl: null,
  initialized: false
}

export const AuthReducer = (state = defaultState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.FETCH_AUTH_DATA:
      return {...state, ...action.payload};
    case AuthActionTypes.INITIALIZED_SUCCESS:
      return {...state, initialized: true};
    case AuthActionTypes.GET_LOGOUT:
      return {...state, isLogin: false, id: null, login: null, email: null, captchaUrl: null};
    case AuthActionTypes.GET_CAPTCHA_URL:
      return {...state, ...action.payload};
    default:
      return state;
  }
}