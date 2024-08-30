import axios from "axios";

export const APIAuthenticated = (token) => {
  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default APIAuthenticated;
