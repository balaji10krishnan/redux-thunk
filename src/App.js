import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/Courses";
import Playlist from "./pages/Playlist";
import CourseDetail from "./pages/CourseDetail";
import PlaylistDetail from "./pages/PlaylistDetail";
import { useSelector } from "react-redux";
import Notfound from "./component/Notfound";

const App = () => {
  const courseDetail = useSelector((state) => state.courseDetail);
  const playlistDetail = useSelector((state) => state.playlistDetail);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Courses />,
        },
        {
          path: "playlist",
          element: <Playlist />,
        },
        {
          path: "courseDetail",
          element: courseDetail ? (
            <CourseDetail />
          ) : (
            <Navigate to={"/"} replace />
          ),
        },
        {
          path: "playlistDetail",
          element: playlistDetail ? (
            <PlaylistDetail />
          ) : (
            <Navigate to={"/playlist"} replace />
          ),
        },
      ],
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
