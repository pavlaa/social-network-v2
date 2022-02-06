import { Dispatch } from "redux";
import { ProfileAction, ProfileActionTypes } from "../../types/profileTypes";
import { stopSubmit } from "redux-form";
import { ProfileAPI } from "../../API";


export const ProfileFetch = (id: string | number) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    try {
      dispatch({ type: ProfileActionTypes.FETCH_PROFILE })
      const response = await ProfileAPI.getProfile(id)
      dispatch({ type: ProfileActionTypes.FETCH_PROFILE_SUCCESS, payload: response.data })
    } catch (e) {
      dispatch({ type: ProfileActionTypes.FETCH_PROFILE_ERROR, payload: "ERROR" })
    }
  }
}

export const ProfileStatusFetch = (id: string | number) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    const response = await ProfileAPI.getProfileStatus(id)
    dispatch({ type: ProfileActionTypes.FETCH_PROFILE_STATUS, payload: response.data })
  }
}

export const updateProfileStatusFetch = (status: string) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    const response = await ProfileAPI.updateProfileStatus(status)
    if (response.data.resultCode === 0) {
      dispatch({ type: ProfileActionTypes.UPDATE_PROFILE_STATUS, payload: status })
    }
  }
}

export const updateProfilePhotoFetch = (file: any) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    const response = await ProfileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
      dispatch({ type: ProfileActionTypes.UPDATE_PROFILE_PHOTO, payload: response.data.data.photos })
    }
  }
}

export const saveProfileInfo = (profile: any, userID: number) => {
  return async (dispatch: any) => {
    const response = await ProfileAPI.saveProfileInfo(profile)
    if (response.data.resultCode === 0) {
      dispatch(ProfileFetch(userID))
    } else {
      dispatch(stopSubmit('profileInfo', { _error: response.data.data.messages }));
    }
  }
}
