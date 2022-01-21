interface UserPhotos {
  small: null | string;
  large: null | string
}
export interface UserTypes {
  name: string;
  id: number;
  photos: UserPhotos;
  status: null | string;
  followed: boolean;
}
export interface UsersData {
  items: UserTypes[];
  totalCount: number;
}


export interface ProfileContacts {
  facebook: null | string;
  website: null | string;
  vk: null | string;
  twitter: null | string;
  instagram: null | string;
  youtube: null | string;
  github: null | string;
  mainLink: null | string;
}
export interface Profile {
  aboutMe: null | string;
  contacts: ProfileContacts;
  lookingForAJob: boolean;
  lookingForAJobDescription: null | string;
  fullName: string;
  userId: number;
  photos: UserPhotos;
}
export interface Post {
  id: number | string;
  name: string;
  message: string;
}


export interface LoginDataTypes {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
}