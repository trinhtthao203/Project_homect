import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
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
  const handleSubmit = () => {};
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
                Xóa bài đăng
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  return (
    <div>
      <div>
        {nav}
        <br />
        <br />
        <br />
        <div className="item-page-detail">
          <h1 className="item-name">{Item.tieude}</h1>
          <div className="item-info">
            <span className="item-img">
              <img src={Item.hinhanh} />
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
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  position={[Item.toado.y, Item.toado.x]}
                  icon={L.icon({ iconUrl: BlueIcon })}
                >
                  <Popup>
                    <img
                      className="img-popup"
                      src={Item.hinhanh}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itemdetail;
