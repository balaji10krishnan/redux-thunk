import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PlaylistDetail() {
  const playlist = useSelector((state) => state.playlistDetail);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex-container">
        {playlist?.map((item, i) => (
          <div className="card-item">
            <img src={item.url} />
            <p>{item.title}</p>
            <p>{item.description}</p>
            <button onClick={() => navigate("/playlist")}>Playlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistDetail;
