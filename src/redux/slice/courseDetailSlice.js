import { createSlice } from "@reduxjs/toolkit";

const courseDetailSlice = createSlice({
  name: "courseDetail",
  initialState: null,
  reducers: {
    addCourse: (state, action) => action.payload,
  },
});

export const courseDetailReducer = courseDetailSlice.reducer;
export const { addCourse } = courseDetailSlice.actions;
