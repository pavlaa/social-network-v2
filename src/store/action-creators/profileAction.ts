import {Dispatch} from "redux";
import {ProfileAction, ProfileActionTypes} from "../../types/profileTypes";
import axios from "axios";
import {ProfileType} from "../../types/types";
import {stopSubmit} from "redux-form";


export const ProfileFetch = (id: string | number) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    try {
      dispatch({type: ProfileActionTypes.FETCH_PROFILE})
      const response = await axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${id}`, {
        withCredentials: true,
        headers: {
          "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d"
        }
      })
      dispatch({type: ProfileActionTypes.FETCH_PROFILE_SUCCESS, payload: response.data})
    } catch (e) {
      dispatch({type: ProfileActionTypes.FETCH_PROFILE_ERROR, payload: "ERROR"})
    }
  }
}

export const ProfileStatusFetch = (id: string | number) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d"
      }
    })
    dispatch({type: ProfileActionTypes.FETCH_PROFILE_STATUS, payload: response.data})
  }
}

export const updateProfileStatusFetch = (status: string) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    const response = await axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status},
      {
      withCredentials: true,
      headers: {
        "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d"
      }
    })
    if (response.data.resultCode === 0) {
      dispatch({type: ProfileActionTypes.UPDATE_PROFILE_STATUS, payload: status})
    }
  }
}

export const updateProfilePhotoFetch = (file: any) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    const formData = new FormData();
    formData.append( 'image', file);
    const response = await axios.put(`https://social-network.samuraijs.com/api/1.0/profile/photo`, formData,
      {
        withCredentials: true,
        headers: {
          "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d",
          'Content-Type': 'multipart/form-data'
        },
      })
    if (response.data.resultCode === 0) {
      dispatch({type: ProfileActionTypes.UPDATE_PROFILE_PHOTO, payload: response.data.data.photos})
    }
  }
}

export const saveProfileInfo = (profile: any, userID: number) => {
  return async (dispatch: any) => {
    const response = await axios.put(`https://social-network.samuraijs.com/api/1.0/profile`, profile,
      {
        withCredentials: true,
        headers: {
          "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d"
        },
      })
    if (response.data.resultCode === 0) {
      dispatch(ProfileFetch(userID))
    } else {
      dispatch(stopSubmit('profileInfo', {_error: response.data.data.messages}));
    }
  }
}