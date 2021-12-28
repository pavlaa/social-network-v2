import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "708d6509-a3f5-4b94-82ab-df3480698e6d"
  }
});

export const UsersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return (
      instance.get(`users?page=${ currentPage }&count=${ pageSize }`)
        .then(response => response.data)
    );
  }
};