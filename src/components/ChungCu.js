import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { removeUserSession } from "../Utils/Common";

function ChungCu(props) {
  const [dbChungCu, setDBChungCu] = useState("");
  const [idchgcu, setIDChgCu] = useState("");

  useEffect(() => {
    axios
      .get("/chungcu")
      .then((res) => {
        setDBChungCu(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  let nav;
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

  const getQuan = (e) => {
    if (e === 1) {
      return <p>Cái Răng</p>;
    } else {
      return <p>Ninh Kiều</p>;
    }
  };

  const handleDel = (idchungcu) => {
    if (window.confirm("Xác nhận xóa !!!")) {
      axios
        .delete(`/delChungCu/${idchungcu}`)
        .then((response) => {
          console.log("Xóa chung cư thành công");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    window.location.reload();
  };

  return (
    <div>
      {nav}
      <div className="container-chungcu">
        <h1
          style={{
            textAlign: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "rgba(197,213,225, 0.8)",
          }}
        >
          Danh Sách Chung Cư
        </h1>
        <button className="btn-custom" style={{ margin: "10px" }}>
          <a
            style={{ textDecoration: "none", color: "#dff9fb" }}
            href="/addChungCu"
          >
            Thêm chung cư
          </a>
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">IDChungCu</th>
              <th scope="col">Tên chung cư</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Tên đường</th>
              <th scope="col">Quận</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {dbChungCu &&
              dbChungCu.map((item) => {
                return (
                  <tr key={item.idchungcu}>
                    <th scope="row"></th>
                    <td>{item.idchungcu}</td>
                    <td>{item.tenchungcu}</td>
                    <td>{item.diachi}</td>
                    <td>{item.tenduong}</td>
                    <td>{getQuan(item.idquan)}</td>
                    <td>
                      <button
                        className="btn-custom"
                        onClick={() => {
                          handleDel(item.idchungcu);
                        }}
                      >
                        ❌
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChungCu;
