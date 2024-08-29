import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { STATUSES } from "../src/globals/misc/statuses";

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
  },
});

export const { setUser, setStatus, setToken } = authSlice.actions;
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
      return response.data;
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
      throw error;
    }
  };
}
