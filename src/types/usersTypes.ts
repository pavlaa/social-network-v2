import {UserTypes} from "./types";

export interface UsersState {
  users: UserTypes[];
  loading: boolean;
  error: null | string;
  totalUsers: number;
  currentPage: number;
  limit: number;
  portionSize: number;
}
export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  SET_USERS_PAGE = "SET_USERS_PAGE"
}
interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessPayload {
  users: UserTypes[];
  totalUsers: number;
}
interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: FetchUsersSuccessPayload;
}
interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}
interface SetUsersPageAction {
  type: UserActionTypes.SET_USERS_PAGE;
  payload: number;
}
export type UsersAction =
  FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | SetUsersPageAction ;