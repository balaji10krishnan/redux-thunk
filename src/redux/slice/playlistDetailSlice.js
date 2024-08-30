import { createSlice } from "@reduxjs/toolkit";

const playlistDetailSlice = createSlice({
  name: "playlistDetail",
  initialState: null,
  reducers: {
    addPlaylist: (state, action) => action.payload,
  },
});

export const playlistDetailReducer = playlistDetailSlice.reducer;
export const { addPlaylist } = playlistDetailSlice.actions;
