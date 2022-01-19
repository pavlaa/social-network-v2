import {Profile} from "./types";


export interface ProfileState {
  profile: Profile | null;
  posts: any[];
  status: null | string;
  loading: boolean,
  error: null | string,
}
export enum ProfileActionTypes {
  FETCH_PROFILE = "FETCH_PROFILE",
  FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS",
  FETCH_PROFILE_ERROR = "FETCH_PROFILE_ERROR"
}
interface FetchProfileAction {
  type: ProfileActionTypes.FETCH_PROFILE;
}
interface FetchProfileSuccessAction {
  type: ProfileActionTypes.FETCH_PROFILE_SUCCESS;
  payload: Profile;
}
interface FetchProfileErrorAction {
  type: ProfileActionTypes.FETCH_PROFILE_ERROR;
  payload: string;
}
export type ProfileAction =
  FetchProfileAction
  | FetchProfileSuccessAction
  | FetchProfileErrorAction;
