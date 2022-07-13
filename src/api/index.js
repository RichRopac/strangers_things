import axios from "axios";
const API_URL = "https://strangers-things.herokuapp.com/api/";
const COHORT = "2206-FTB-ET-WEB-FT";

export const getAllPosts = async () => {
  const response = await fetch(`${API_URL + COHORT}/posts`);
  const result = await response.json();
  const data = result.data.posts;
  console.log("Data ");
  return data;
};

export const userRegistration = async (username, password) => {
  console.log("User and Password", username, password);
  console.log(`${API_URL + COHORT}/users/register`);
  const response = await fetch(`${API_URL + COHORT}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });
  const result = await response.json();
  return result;
};

export const userLogin = async (username, password) => {
  const response = await fetch(`${API_URL + COHORT}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });

  const result = await response.json();
  return result;
};

export const getProfile = async (token) => {
  const response = await fetch(`${API_URL + COHORT}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const { data } = await response.json();
  return data;
};

export const postNew = async (token, post) => {
  const response = await fetch(`${API_URL + COHORT}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: post,
    }),
  });
  const result = await response.json();
  const newPost = result.data.post;
  return newPost;
};

export const postMessage = async (token, postID, payload) => {
  const response = await fetch(`${API_URL + COHORT}/posts/${postID}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      message: {
        content: `${payload.content}`,
      },
    }),
  });
  const result = await response.json();
  console.log(result, "posted message after API");
  return result;
};

export const modifyPost = async (token, post, postID) => {
  const response = await fetch(`${API_URL + COHORT}/posts/${postID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: post,
    }),
  });
  const result = await response.json();
  console.log(result);
};

export const deletePost = async (token, postID) => {
  const response = await fetch(`${API_URL + COHORT}/posts/${postID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  console.log(result);
};
