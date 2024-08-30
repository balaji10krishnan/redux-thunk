import React from "react";
import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p>404 Notfound</p>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Course
        </button>
      </div>
    </div>
  );
}

export default Notfound;
