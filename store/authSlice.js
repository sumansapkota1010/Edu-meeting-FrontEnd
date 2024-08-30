import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { STATUSES } from "../src/globals/misc/statuses";
import { APIAuthenticated } from "../src/http";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: null,
    status: STATUSES.SUCCESS,
    token: "",
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
      console.log(action.payload);
    },
    setStatus(state, action) {
      state.status = action.payload;
      console.log(action.payload);
    },
    setToken(state, action) {
      state.token = action.payload;
      console.log(action.payload);
    },
    LogOut(state, action) {
      state.data = [];
      state.token = null;
      state.status = STATUSES.SUCCESS;
    },
  },
});

export const { setUser, setStatus, setToken, LogOut } = authSlice.actions;
export default authSlice.reducer;

export function registerUser(data) {
  return async function loginUserThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        data
      );
      console.log(response.data);
      dispatch(setUser(response.data));
      dispatch(setStatus(STATUSES.SUCCESS));
      return response.data;
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
      throw error;
    }
  };
}

export function loginUser(data) {
  return async function loginUserThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        data
      );
      console.log(response.data);
      dispatch(setToken(response.data));
      dispatch(setUser(response.data));
      dispatch(setStatus(STATUSES.SUCCESS));
      localStorage.setItem("token", response.data.data);
      return response.data;
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
      throw error;
    }
  };
}

export function fetchProfile() {
  return async function fetchProfileThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await APIAuthenticated.get("/profile");
      dispatch(setUser(response.data.data));

      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
