export interface AuthState {
  isLogin: boolean;
  id: null | number;
  login: null | string;
  email: null | string;
  captchaUrl?: null | string;
  initialized: boolean;
}

export enum AuthActionTypes {
  FETCH_AUTH_DATA = "FETCH_AUTH_DATA",
  INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"
}
interface FetchAuthDataPayload {
  isLogin: boolean;
  id: number;
  login: string;
  email: string;
}
interface FetchAuthDataAction {
  type: AuthActionTypes.FETCH_AUTH_DATA,
  payload: FetchAuthDataPayload
}
interface InitializedSuccess {
  type: AuthActionTypes.INITIALIZED_SUCCESS
}

export type AuthAction = FetchAuthDataAction | InitializedSuccess;