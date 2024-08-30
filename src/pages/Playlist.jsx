import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist } from "../redux/slice/playlistSlice";
import { useNavigate } from "react-router-dom";
import { addPlaylist } from "../redux/slice/playlistDetailSlice";

function Playlist() {
  const { loading, error, data } = useSelector((state) => state.playlist);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePlaylist = (playlist) => {
    navigate("/playlistDetail");
    dispatch(addPlaylist(playlist.courses));
  };
  useEffect(() => {
    dispatch(fetchPlaylist());
  }, []);
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
            <button onClick={() => handlePlaylist(item)}>Playlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
