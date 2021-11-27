import React, { useState, useEffect } from "react";
import { getUser, getToken, removeUserSession } from "../Utils/Common";
import { Link } from "react-router-dom";
import ListItems from "./ListItems";
function Home(props) {
  const user = getUser();
  const token = getToken();

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  let nav;
  if (getUser() && getToken()) {
    nav = (
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            Trang chủ
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/post"}>
                  Tạo bài đăng
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleLogout} to={"/"}>
                  Đăng xuất
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    nav = (
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            Trang chủ
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Đăng nhập
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <div>
      {nav}
      <br />
      <ListItems />
    </div>
  );
}

export default Home;
