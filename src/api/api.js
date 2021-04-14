import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "47723105-2c26-447b-825f-b217c63e9da0" },
});

const baseURL = "https://social-network.samuraijs.com/api/1.0/";

export const usersAPI = {
  getUsers(page = 1, pageSize) {
    return instance
      .get(`${baseURL}users?page=${page}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(userID) {
    return instance.post(`${baseURL}follow/${userID}`, {});
  },

  unfollow(userID) {
    return instance.delete(`${baseURL}follow/${userID}`);
  },
};


export const authAPI = {
  getUserData() {
    return instance.get(`${baseURL}auth/me`);
  },
  login(email, password, rememberMe) {
    return instance.post(`${baseURL}/auth/login`, {
      email,
      password,
      rememberMe,
    });
  },
  logout() {
    return instance.delete(`${baseURL}/auth/login`);
  },
};


export const profileAPI = {
  getProfileUser(id) {
    return instance
      .get(`${baseURL}profile/${id}`)
      .then((response) => response.data);
  },
  getStatus(id) {
    return instance
      .get(`${baseURL}profile/status/${id}`)
      .then((response) => response.data);
  },
  updateStatus(newStatus) {
    return instance.put(`${baseURL}profile/status`, { status: newStatus });
  },
};
