export interface UserPhotos {
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
  facebook: string | null;
  website: string | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: string | null;
  github: string | null;
  mainLink: string | null;
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


export interface MessageTypes {
  id: number | string;
  name: string;
  date: string;
  message: string;
}


export interface FriendTypes {
  id: number;
  name: string;
  photo: string;
}