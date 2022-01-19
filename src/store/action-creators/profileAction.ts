import {Dispatch} from "redux";
import {ProfileAction, ProfileActionTypes} from "../../types/profileTypes";
import axios from "axios";
import {Profile} from "../../types/types";


export const ProfileFetch = (id: string) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    try {
      dispatch({type: ProfileActionTypes.FETCH_PROFILE})
      const response = await axios.get<Profile>(`https://social-network.samuraijs.com/api/1.0/profile/${id}`, {
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