import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import axios from "axios";
import { getUser } from "../Utils/Common";

const Post = props => {
  const [tieude, setTieuDe] = useState("");
  const [chungcu, setChungCu] = useState(1);
  const [dientich, setDienTich] = useState();
  const [mucgia, setMucGia] = useState();
  const [tangso, setTangSo] = useState();
  const [sophongNgu, setSoPhongNgu] = useState();
  const [sophongVS, setSoPhongVS] = useState();
  const [noithat, setNoiThat] = useState(1);
  const [phaply, setPhapLy] = useState(1);
  const [hinhanh, setHinhAnh] = useState(null);
  const [mota, setMoTa] = useState("");
  const [imgData, setImgData] = useState(null);
  const [error, setError] = useState(null);
  const [dbChungCu, setDBChungCu] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userid, setUserID] = useState("");
  const [textlen, setTextLen] = useState(0);

  useEffect(() => {
    const user = getUser();
    setUserID(user.user_id);
  }, []);

  useEffect(() => {
    axios
      .get("/chungcu")
      .then((response) => {
        setDBChungCu(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const handleCancel = () => {
    props.history.push("/");
  };

  var today = new Date();
  var ngaydang =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  const handleSubmit = () => {
    axios
      .post(`/loadBaiDang`, {
        userid: userid,
        tieude: tieude,
        mota: mota,
        ngaydang: ngaydang,
        dientich: dientich,
        mucgia: mucgia,
        tangso: tangso,
        sophongNgu: sophongNgu,
        sophongVS: sophongVS,
        noithat: noithat,
        phaply: phaply,
        idchungcu: chungcu,
        imgData: imgData,
      })
      .then((response) => {
        console.log("Đăng bài thành công!!!");
        props.history.push("/");
      })
      .catch((error) => {
        if (error.response.status === 400)
          setError(error.response.data.message);
        else if (error.response.status === 402)
          setError(error.response.data.message);
        else setError("Lỗi. Vui lòng thử lại lần nữa !");
      });
  };

  let nav = (
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          Trang chủ
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="btn-custom" onClick={handleSubmit}>
                Đăng bài
              </button>
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
                <label htmlFor="title">
                  Tựa bài <label className="requirelbl">*</label>{" "}
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Đăng bán căn hộ mặt tiền..."
                  onChange={(e) => {
                    setTieuDe(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="apartment">
                  Chung cư <label className="requirelbl">*</label>
                </label>
                <select
                  className="form-control"
                  id="apartment"
                  onChange={(e) => {
                    const selectedChungCu = e.target.value;
                    setChungCu(selectedChungCu);
                  }}
                >
                  {dbChungCu.map((item) => {
                    return (
                      <option key={item.idchungcu} value={item.idchungcu}>
                        {item.tenchungcu}
                      </option>
                    );
                  })}
                </select>
                <p styles={{ marginTop: "20px" }}>
                  Chưa có chung cư? <a href="/addChungCu">Thêm chung cư</a>
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="area">
                  Diện tích <label className="requirelbl">*</label>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="m2"
                  onChange={(e) => {
                    setDienTich(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">
                  Mức giá <label className="requirelbl">*</label>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="triệu/m2"
                  onChange={(e) => {
                    setMucGia(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="number-floor">
                  Tầng số <label className="requirelbl">*</label>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="1,2,3,..."
                  onChange={(e) => {
                    setTangSo(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="number-bedroom">
                  Số phòng ngủ <label className="requirelbl">*</label>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="1,2,3,..."
                  onChange={(e) => {
                    setSoPhongNgu(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="number-toilet">
                  Số phòng vệ sinh <label className="requirelbl">*</label>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="1,2,3,..."
                  onChange={(e) => {
                    setSoPhongVS(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="district">
                  Nội thất <label className="requirelbl">*</label>
                </label>
                <select
                  className="form-control"
                  id="district"
                  onChange={(e) => {
                    setNoiThat(e.target.value);
                  }}
                >
                  <option value="1" default>
                    Trống
                  </option>
                  <option value="2">Cơ bản</option>
                  <option value="3">Đầy đủ</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="juridical">
                  Pháp lý <label className="requirelbl">*</label>
                </label>
                <select
                  className="form-control"
                  id="district"
                  onChange={(e) => {
                    setPhapLy(e.target.value);
                  }}
                >
                  {/* sửa csdl */}
                  <option value="1" default>
                    Đang chờ sổ
                  </option>
                  <option value="2">Sổ hồng </option>
                  <option value="3">Sổ đỏ</option>
                </select>
              </div>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
              <link
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                rel="stylesheet"
              />
              <div className="form-group">
                <label htmlFor="description">
                  Hình ảnh <label className="requirelbl">*</label>
                </label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setHinhAnh(e.target.files[0]);
                        const reader = new FileReader();
                        reader.addEventListener("load", () => {
                          setImgData(reader.result);
                        });
                        reader.readAsDataURL(e.target.files[0]);
                      }
                    }}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Tải ảnh căn hộ
                  </label>
                </div>
              </div>
              <div>
                {loading ? (
                  <h3>Loading...</h3>
                ) : (
                  <img className="Img-post" src={imgData} />
                )}
              </div>
              <div className="form-group">
                <label htmlFor="description">Mô tả</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="7"
                  maxLength="500"
                  onChange={(e) => {
                    var len = e.target.value.length;
                    if (len > 500) {
                      e.target.value = e.target.value.substring(0, 500);
                    } else {
                      setTextLen(len);
                    }
                    setMoTa(e.target.value);
                  }}
                ></textarea>
                <div id="charNum">{textlen}/500 </div>
              </div>
              {error && <div className="error">{error}</div>}
              <p styles={{ color: "red" }}>* Bắt buộc</p>
              <div className="d-grid gap-2">
                <button
                  onClick={handleSubmit}
                  className="btn-custom"
                  type="button"
                >
                  Đăng bài
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
      </div>
    </div>
  );
}
export default Post;
