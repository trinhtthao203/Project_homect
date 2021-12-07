import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../Utils/Common";
import { Link } from "react-router-dom";
import SubmitButton from "./SubmitButton";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    setError(null);
    axios
      .post("/taikhoan/signin", {
        userName: userName,
        passwd: passwd,
      })
      .then((response) => {
        console.log("login success");
        setUserSession(response.data.token, response.data.user);
        props.history.push("/");
      })
      .catch((error) => {
        if (error.response.status === 401)
          setError(error.response.data.message);
        else if (error.response.status === 400)
          setError(error.response.data.message);
        else setError("Lỗi. Vui lòng thử lại lần nữa.");
        setPasswd("");
      });
  };

  const handleCancel = () => {
    props.history.push("/");
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Đăng nhập</h3>
          <div className="form-group">
            <label>Tên tài khoản</label>
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={(val) => setUserName(val.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              value={passwd}
              onChange={(val) => setPasswd(val.target.value)}
            />
          </div>
          {error && <div className="error">{error}</div>}
          <div className="d-grid gap-2">
            <button onClick={handleSubmit} className="btn-custom" type="button">
              Đăng nhập
            </button>
            <button
              onClick={handleCancel}
              className="btn btn-outline-primary"
              type="button"
            >
              Hủy
            </button>
          </div>
          <div className="register">
            <p>Bạn chưa có tài khoản ? </p>
            <Link to={"/register"}>Đăng kí tại đây</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
