import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  profile: {
    uname: "",
    user_id: 0,
    email: "",
    isLogin: false,
  },
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLogin(state, action) {
      const { uname, user_id, email} = action.payload;
      state.profile = {
        uname,
        user_id,
        email,
        isLogin: true,
      };
    },
    setLogout(state, action) {
      state.profile = initialState;
    },
  },
});
export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;