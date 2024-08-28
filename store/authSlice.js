import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../src/misc/status";
import axios from "axios";

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
  return async function loginUserThunk(dispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        data
      );
      console.log(response.data);
      dispatch(setUser(response.data));
      dispatch(setStatus(Status.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
