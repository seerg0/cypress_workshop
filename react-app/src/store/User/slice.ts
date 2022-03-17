import { createSlice } from "@reduxjs/toolkit";
import { UserDataType } from "../../common/common.types";
import { InitialStore } from "./types";

function getAuthData() {
  const authDataStr = localStorage.getItem("auth-data");
  console.log("authDataStr", authDataStr);

  return authDataStr
    ? (JSON.parse(authDataStr) as { accessToken: string; user: UserDataType })
    : undefined;
}

const initialState: InitialStore = {
  userData: getAuthData(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.userData = payload;
      localStorage.setItem("auth-data", JSON.stringify(payload));
    },
    clearUserData: (state) => {
      state.userData = undefined;
      localStorage.removeItem("auth-data");
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
