import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/slice/coursesSlice";
import { useNavigate } from "react-router-dom";
import { addCourse } from "../redux/slice/courseDetailSlice";

function Courses() {
  const { loading, error, data } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCourse = (course) => {
    dispatch(addCourse(course));
    navigate("/courseDetail");
  };
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  console.log(data);
  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;
  return (
    <div>
      <div className="flex-container">
        {data?.map((item, i) => (
          <div className="card-item">
            <img src={item.url} />
            <p>{item.title}</p>
            <p>{item.description}</p>
            <button onClick={() => handleCourse(item)}>Course</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
