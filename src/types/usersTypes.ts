import {UserTypes} from "./types";

export interface UsersState {
  users: UserTypes[];
  loading: boolean;
  error: null | string;
  totalUsers: number;
  currentPage: number;
  limit: number;
  portionSize: number;
  followingProgress: number[]
}
export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  SET_USERS_PAGE = "SET_USERS_PAGE",
  FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_FOLLOWING_PROGRESS = "SET_FOLLOWING_PROGRESS"
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
interface followAction {
  type: UserActionTypes.FOLLOW;
  payload: number;
}
interface unfollowAction {
  type: UserActionTypes.UNFOLLOW;
  payload: number;
}
interface setFollowingProgressPayload {
  id: number;
  isFetching: boolean;
}
interface setFollowingProgressAction {
  type: UserActionTypes.SET_FOLLOWING_PROGRESS;
  payload: setFollowingProgressPayload;
}
export type UsersAction =
  FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | SetUsersPageAction
  | followAction
  | unfollowAction
  | setFollowingProgressAction;