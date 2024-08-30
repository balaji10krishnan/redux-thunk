import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const fetchPlaylist = createAsyncThunk("playlist/get", async () => {
  const res = await fetch(
    "https://65b7b3ea46324d531d55475b.mockapi.io/playlists"
  );
  if (!res.ok) {
    const error = new Error("Failed to fetch playlist");
    throw error;
  }
  const data = res.json();
  return data;
});
const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    loading: true,
    error: false,
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlaylist.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPlaylist.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPlaylist.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const playlistReducer = playlistSlice.reducer;
