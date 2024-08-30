import axios from "axios";

export const APIAuthenticated = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `${localStorage.getItem("token")}`,
  },
});
