import {ProfileAction, ProfileActionTypes, ProfileState} from "../../types/profileTypes";

const defaultState: ProfileState = {
  profile: null,
  posts: [
    {name: "Pavel", message: "Hi!"}
  ],
  status: null,
  loading: false,
  error: null
}

export const profileReducer = (state = defaultState, action: ProfileAction): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.FETCH_PROFILE:
      return {...state, loading: true, error: null};
    case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
      return {...state, loading: false, error: null, profile: action.payload};
    case ProfileActionTypes.FETCH_PROFILE_ERROR:
      return {...state, loading: false, error: action.payload};
    case ProfileActionTypes.FETCH_PROFILE_STATUS:
      return {...state, status: action.payload}
    case ProfileActionTypes.UPDATE_PROFILE_STATUS:
      return {...state, status: action.payload}
    default:
      return state;
  }
}