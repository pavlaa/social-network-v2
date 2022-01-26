import {ProfileAction, ProfileActionTypes, ProfileState} from "../../types/profileTypes";

const defaultState: ProfileState = {
  profile: {
    aboutMe: null,
    lookingForAJob: false,
    lookingForAJobDescription: null,
    fullName: null,
    userId: null
  },
  posts: [
    {id: 1, name: "Pavel", message: "Hi!"}
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
      return {...state, status: action.payload};
    case ProfileActionTypes.UPDATE_PROFILE_PHOTO:
      if (state.profile) {
        return {...state, profile: {...state.profile, photos: action.payload}};
      }
      return state;
    case ProfileActionTypes.SEND_POST:
      const dateID = +(new Date())
      const post = {
        id: dateID,
        name: 'Pavel',
        message: action.payload
      }
      return {...state, posts: [post, ...state.posts]};
    default:
      return state;
  }
}