import {Post, Profile, UserPhotos} from "./types";


export interface ProfileState {
  profile: Profile | null;
  posts: Post[];
  status: string | null;
  loading: boolean;
  error: null | string;
}
export enum ProfileActionTypes {
  FETCH_PROFILE = "FETCH_PROFILE",
  FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS",
  FETCH_PROFILE_ERROR = "FETCH_PROFILE_ERROR",
  FETCH_PROFILE_STATUS = "FETCH_PROFILE_STATUS",
  UPDATE_PROFILE_STATUS = "UPDATE_PROFILE_STATUS",
  UPDATE_PROFILE_PHOTO = "UPDATE_PROFILE_PHOTO",
  SEND_POST = "SEND_POST"
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
interface FetchProfileStatusAction {
  type: ProfileActionTypes.FETCH_PROFILE_STATUS;
  payload: string | null;
}
interface UpdateProfileStatusAction {
  type: ProfileActionTypes.UPDATE_PROFILE_STATUS;
  payload: string;
}
interface UpdateProfilePhotoAction {
  type: ProfileActionTypes.UPDATE_PROFILE_PHOTO;
  payload: UserPhotos;
}
interface SendPostAction {
  type: ProfileActionTypes.SEND_POST;
  payload: string;
}
export type ProfileAction =
  FetchProfileAction
  | FetchProfileSuccessAction
  | FetchProfileErrorAction
  | FetchProfileStatusAction
  | UpdateProfileStatusAction
  | UpdateProfilePhotoAction
  | SendPostAction;
