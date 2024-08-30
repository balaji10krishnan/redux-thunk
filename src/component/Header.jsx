import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className={`${classes["header-div"]}`}>
      <h2>Redux Thunk</h2>
      <nav style={{ marginTop: "30px" }}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? `${classes["nav-link"]} ${classes["active"]}`
              : `${classes["nav-link"]}`
          }
        >
          Courses
        </NavLink>
        <NavLink
          to={"/playlist"}
          className={({ isActive }) =>
            isActive
              ? `${classes["nav-link"]} ${classes["active"]}`
              : `${classes["nav-link"]}`
          }
        >
          Playlist
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
