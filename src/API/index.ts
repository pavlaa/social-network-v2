import axios from "axios";
import { LoginDataTypes } from "../types/types";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "API-KEY": `${API_KEY}`
  }
});

export const UsersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return (
      instance.get(`users?page=${currentPage}&count=${pageSize}`)
    );
  },
  follow(userId: number) {
    return (
      instance.post(`follow/${userId}`, {})
    );
  },
  unfollow(userId: number) {
    return (
      instance.delete(`follow/${userId}`)
    )
  }
};

export const AuthAPI = {
  getAuth() {
    return instance.get(`auth/me`);
  },
  login({ email, password, rememberMe, captcha }: LoginDataTypes) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha })
  },
  logout() {
    return instance.delete(`auth/login`)
  },
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }
};

export const ProfileAPI = {
  getProfile(id: string | number) {
    return instance.get(`profile/${id}`)
  },
  getProfileStatus(userId: string | number) {
    return instance.get(`profile/status/${userId}`)
  },
  updateProfileStatus(status: string) {
    return instance.put(`profile/status`, { status })
  },
  savePhoto(file: any) {
    const formData = new FormData();
    formData.append('image', file);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfileInfo(profile: any) {
    return instance.put(`profile`, profile)
  }
};