import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CourseDetail() {
  const courseDetail = useSelector((state) => state.courseDetail);
  const navigate = useNavigate();
  console.log(courseDetail);

  return (
    <div className="course-detail-card">
      <img src={courseDetail.url} />
      <p>{courseDetail.title}</p>
      <p>{courseDetail.description}</p>
      <button onClick={() => navigate("/")}>Course</button>
    </div>
  );
}

export default CourseDetail;
