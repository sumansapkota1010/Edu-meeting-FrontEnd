import axios from "axios";

export const APIAuthenticated = (token) => {
  return axios.create({
    baseURL: "https://edu-meeting-backend.onrender.com/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default APIAuthenticated;
