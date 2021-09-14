import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: { username: 'Nik'},
  reducers: {
    changeUsername: (state, action) => {
      const { newUsername } = action.payload
      state.username = newUsername
    }
  }
})
export const { changeUsername } = userSlice.actions

export default userSlice.reducer