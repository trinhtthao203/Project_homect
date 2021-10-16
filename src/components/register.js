import React, { useState } from "react";
import axios from "axios";

function Register(props) {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isMale, setIsMale] = useState("");
  const [passwd, setPasswd] = useState("");
  const [confirmPasswd, setConfirmPasswd] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    setError(null);
    axios
      .post("/taikhoan/register", {
        userName: userName,
        fullName: fullName,
        phoneNumber: phoneNumber,
        isMale: isMale,
        passwd: passwd,
        confirmPasswd: confirmPasswd,
      })
      .then((response) => {
        console.log("register success");
        props.history.push("/login");
      })
      .catch((error) => {
        if (error.response.status === 400)
          setError(error.response.data.message);
        else if (error.response.status === 401)
          setError(error.response.data.message);
        else if (error.response.status === 402)
          setError(error.response.data.message);
        else if (error.response.status === 403)
          setError(error.response.data.message);
        else setError("Lỗi. Vui lòng thử lại lần nữa.");
        setPasswd("");
        setConfirmPasswd("");
      });
  };

  const handleCancel = () => {
    props.history.push("/");
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Đăng kí tài khoản</h3>
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
            <label>Họ tên</label>
            <input
              type="text"
              className="form-control"
              value={fullName}
              onChange={(val) => setFullName(val.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              value={phoneNumber}
              onChange={(val) => setPhoneNumber(val.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Giới tính</label>
            <div className="form-check">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isMale"
                  id="inlineRadio1"
                  value="1"
                  onChange={(val) => setIsMale(val.target.value)}
                />
                <label className="form-check-label">Nam</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isMale"
                  id="inlineRadio2"
                  value="0"
                  onChange={(val) => setIsMale(val.target.value)}
                />
                <label className="form-check-label">Nữ</label>
              </div>
            </div>
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
          <div className="form-group">
            <label>Xác nhận mật khẩu</label>
            <input
              type="password"
              className="form-control"
              value={confirmPasswd}
              onChange={(val) => setConfirmPasswd(val.target.value)}
            />
          </div>
          {error && <div className="error">{error}</div>}
          <div className="d-grid gap-2">
            <button
              onClick={handleSubmit}
              className="btn btn-primary"
              type="button"
            >
              Đăng kí
            </button>
            <button
              onClick={handleCancel}
              className="btn btn-outline-primary"
              type="button"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
