import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Status } from "../src/misc/status";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: [],
    status: Status.SUCCESS,
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setUser, setStatus } = authSlice.actions;
export default authSlice.reducer;

export function registerUser(data) {
  return async function registerUserThunk(dispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        data
      );
      dispatch(setUser(response.data));
      dispatch(setStatus(Status.SUCCESS));
      return response.data;
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
      throw error;
    }
  };
}
