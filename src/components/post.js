import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import $ from "jquery";
function post() {
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  var $ = require("jquery");
  // Add the following code if you want the name of the file appear on select
  $(".custom-file-input").on("change", function () {
    var files = Array.from(this.files);
    var fileName = files
      .map((f) => {
        return f.name;
      })
      .join(", ");
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });

  let nav = (
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          Trang chủ
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" onClick={handleLogout} to={"/"}>
                Xuất bản
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  return (
    <div className="">
      {nav}
      <div className="container-form">
        <div className="auth-wrapper">
          <div className="auth-inner-form">
            <h1>Bài đăng</h1>
            <form className="container-from">
              <div className="form-group">
                <label htmlFor="title">Tựa bài</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="district">Quận</label>
                <select className="form-control" id="district">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="apartment">Chung cư</label>
                <select className="form-control" id="apartment">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="area">Diện tích</label>
                <input className="form-control" type="text" placeholder="m2" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Mức giá</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="number-floor">Tầng số</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="number-bedroom">Số phòng ngủ</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="number-toilet">Số phòng vệ sinh</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <fieldset className="form-group">
                <div className="row">
                  <label className="col-form-label col-sm-2 pt-0">
                    Nội thất
                  </label>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="option1"
                      />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        Trống
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="option2"
                      />
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Cơ bản
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios3"
                        value="option3"
                      />
                      <label className="form-check-label" htmlFor="gridRadios3">
                        Đầy đủ
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className="form-group">
                <label htmlFor="juridical">Pháp lý</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
              <link
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                rel="stylesheet"
              />
              <div className="form-group">
                <label htmlFor="description">Hình ảnh</label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    multiple
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose file
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description">Mô tả</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default post;
