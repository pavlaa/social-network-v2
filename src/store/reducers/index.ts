import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {profileReducer} from "./profileReducer";
import {AuthReducer} from "./authReducer";
import {reducer as formReducer} from "redux-form"


export const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  auth: AuthReducer,
  form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>