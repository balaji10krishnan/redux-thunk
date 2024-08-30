import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  loading: true,
  error: false,
  data: [],
};
export const fetchCourses = createAsyncThunk("courses/get", async () => {
  const res = await fetch(
    "https://65b7b3ea46324d531d55475b.mockapi.io/courses"
  );
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      `Error: ${res.status} ${res.statusText}. Message: ${
        errorData.message || "Unknown error"
      }`
    );
  }
  const data = await res.json();
  return data;
});

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      console.log("success");
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCourses.rejected, (state, action) => {
      console.log("error", action.error);
      state.loading = false;
      state.error = true;
    });
  },
});

export const coursesReducer = coursesSlice.reducer;
export const {} = coursesSlice.actions;
