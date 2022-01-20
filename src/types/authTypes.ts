export interface AuthState {
  isLogin: boolean;
  id: null | number;
  login: null | string;
  email: null | string;
  captchaUrl: null | string;
  initialized: boolean;
}

export enum AuthActionTypes {
  FETCH_AUTH_DATA = "FETCH_AUTH_DATA",
  INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS",
  GET_LOGOUT = "GET_LOGOUT",
  GET_CAPTCHA_URL = "GET_CAPTCHA_URL"
}
interface FetchAuthDataPayload {
  isLogin: boolean;
  id: number;
  login: string;
  email: string;
}
interface GetCaptchaUrlPayload {
  captchaUrl: string;
}
interface FetchAuthDataAction {
  type: AuthActionTypes.FETCH_AUTH_DATA;
  payload: FetchAuthDataPayload
}
interface InitializedSuccess {
  type: AuthActionTypes.INITIALIZED_SUCCESS;
}
interface GetLogoutAction {
  type: AuthActionTypes.GET_LOGOUT;
}
interface GetCaptchaUrlAction {
  type: AuthActionTypes.GET_CAPTCHA_URL;
  payload: GetCaptchaUrlPayload
}

export type AuthAction = FetchAuthDataAction | InitializedSuccess | GetLogoutAction | GetCaptchaUrlAction;