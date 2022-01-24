import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {profileReducer} from "./profileReducer";
import {AuthReducer} from "./authReducer";
import {reducer as formReducer} from "redux-form"
import {messagesReducer} from "./messagesReducer";


export const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  user: userReducer,
  auth: AuthReducer,
  form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>