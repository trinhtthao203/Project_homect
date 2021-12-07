import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import L from "leaflet";
<<<<<<< HEAD
import {
  TileLayer,
  Marker,
  Popup,
  MapContainer,
} from "react-leaflet";
import BlueIcon from "../Leaflet/css/images/blueicon.png";
function Itemdetail(props) {
  const itemId = props.match.params.id;
  const [Item, setItem] = useState({});
  useEffect(() => {
    axios
      .post("/baidang/id", {
        idbaidang: itemId,
      })
      .then((res) => {
        setItem(res.data[0]);
        //Return Object in Array
      })
      .catch((error) => {
        console.log(error);
        console.log("shfk");
      });
  }, []);
  if (Item.toado && Item.toado.x) {
    console.log(Item.toado.y);
  }

  return (
    <div>
      <div>
        <Nav />
        <br />
        <br />
        <br />
        <div className="item-page-detail">
          <h1 className="item-name">{Item.tieude}</h1>
          <div className="item-info">
            <span className="item-img">
              {Item.hinhanh && (
                <img
                  className="img-popup"
                  src={require(`../Images/${Item.hinhanh}`).default}
                  style={{ height: 400, width: 400 }}
                />
              )}
            </span>
            <span className="item-detail">
              <div>
                <div>
                  <h4>Thông tin căn hộ bán</h4>
                  <div>
                    <span>Giá bán: {Item.mucgia} triệu/m2 ||</span>
                    <span>Diện tích: {Item.dientich} m2</span>
                  </div>
                  <div>
                    <span>Vị trí tầng ở: Tầng {Item.tangso} ||</span>
                    <span>Số phòng ngủ: {Item.sophongngu} ||</span>
                    <span>Số phòng vệ sinh: {Item.sophongvs}</span>
                  </div>
                  <div>
                    <span>Nội thất: {Item.noithat} ||</span>
                    <span>Pháp lí: {Item.phaply}</span>
                  </div>
                </div>
                <br />
                <div>
                  <h4>Mô tả</h4>
                  <div>{Item.mota}</div>
                </div>
              </div>
            </span>
          </div>

          <div className="map">
            {Item.toado && (
              <MapContainer
                className="map"
                center={[Item.toado.y, Item.toado.x]}
                zoom={16}
                scrollWheelZoom={true}
                style={{ height: 500, width: 1200 }}
=======
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import BlueIcon from "../Leaflet/css/images/blueicon.png";
import { getUser } from "../Utils/Common";
// import { Alert } from "bootstrap";
// import "bootstrap/dist/js/popper.min.js";
function Itemdetail(props) {
  const usr = getUser();
  const itemId = props.match.params.id;
  const [Item, setItem] = useState([]);

  useEffect(() => {
    axios
      .post("/baidang/id", {
        idbaidang: itemId,
      })
      .then((res) => {
        setItem(res.data[0]);
        console.log(res.data[0]);
        //Return Object in Array
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const idbaidang = Item.idbaidang;
  const handleDelete = () => {
    if (window.confirm("Xác nhận xóa !!!")) {
      axios
        .delete(`/delBaiDang/${idbaidang}`)
        .then((response) => {
          console.log("Xóa bài đăng thành công");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    props.history.push("/");
  };

  let nav;
  if (usr.user_id === Item.userid) {
    nav = (
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            Trang chủ
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="btn-custom" onClick={handleDelete}>
                  Xóa bài đăng
                </button>
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
        </div>
      </nav>
    );
  }

  //const photo = require(`../Images/${Item.url}`).default;
  return (
    <div>
      <br />
      <br />
      <br />
      {nav}
      <div className="item-page-detail">
        <h1 className="item-name">{Item.tieude}</h1>
        <div className="item-info">
          <span className="item-img">
            <img src={Item.hinhanh} height="10%" width="50%" />
          </span>
          <span className="item-detail">
            <div>
              <div>
                <h4>Thông tin nhà bán</h4>
                <div>
                  <span>Giá bán: {Item.mucgia} triệu ||</span>
                  <span>Diện tích: {Item.dientich} m2</span>
                </div>
                <div>
                  <span>Vị trí tầng ở: Tầng {Item.tangso} ||</span>
                  <span>Số phòng ngủ: {Item.sophongngu} ||</span>
                  <span>Số phòng vệ sinh: {Item.sophongvs}</span>
                </div>
                <div>
                  <span>Nội thất: {Item.noithat} ||</span>
                  <span>Pháp lí: {Item.phapli}</span>
                </div>
              </div>
              <br />
              <div>
                <h4>Mô tả</h4>
                <div>
                  {/* {Item.toado} */}
                  {Item.mota}
                </div>
              </div>
            </div>
          </span>
          <div>
            <div className="map">
              <Map
                className="map"
                center={[10.030948, 105.769099]}
                zoom={12}
                scrollWheelZoom={true}
>>>>>>> 833135fc65969acd7b54ed9fd28ac7f63836bd9d
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
<<<<<<< HEAD

                <Marker
                  position={[Item.toado.y, Item.toado.x]}
                  icon={L.icon({ iconUrl: BlueIcon })}
                >
                  <Popup>
                    <img
                      className="img-popup"
                      src={require(`../Images/${Item.hinhanh}`).default}
                      style={{ height: 60, width: 100 }}
                    />
                    <br />
                    {Item.tenchungcu}
                    <div>
                    <Link to={`/routeMap/${Item.toado.x}/${Item.toado.y}`}>
                      Chỉ đường
                    </Link>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            )}
=======
                {/* <Marker
                  position={Item.toado}
                  icon={L.icon({ iconUrl: BlueIcon })}
                >
                  <Popup>{Item.tenchungcu}</Popup>
                </Marker> */}
              </Map>
            </div>
>>>>>>> 833135fc65969acd7b54ed9fd28ac7f63836bd9d
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itemdetail;
