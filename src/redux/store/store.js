import { configureStore } from "@reduxjs/toolkit";
import { coursesReducer } from "../slice/coursesSlice";
import { courseDetailReducer } from "../slice/courseDetailSlice";
import { playlistReducer } from "../slice/playlistSlice";
import { playlistDetailReducer } from "../slice/playlistDetailSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    courseDetail: courseDetailReducer,
    playlist: playlistReducer,
    playlistDetail: playlistDetailReducer,
  },
});
