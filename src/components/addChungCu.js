import React, { useState, useEffect, Alert } from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "../index.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Alert } from "bootstrap";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const AddChungCu = (props) => {
  const [mapLayer, setMapLayer] = useState([]);
  const [tenchungcu, setTenChungCu] = useState();
  const [isToado, setIsToaDo] = useState(false);
  const [diachi, setDiaChi] = useState([]);
  const [tenduong, setTenDuong] = useState([]);
  const [quan, setQuan] = useState("2");
  const [error, setError] = useState(null);

  const onCreated = (e) => {
    console.log(e);
    setIsToaDo(true);
    const { layer, layerType } = e;
    // const { _latlng, _leaflet_id } = layer;
    // const { lat, lng } = _latlng;
    // setToaDo("POINT(" + lat + "," + lng + ")");
    // setIDPoint(_leaflet_id);
    // console.log(_latlng);
    if (layerType === "marker") {
      const { _leaflet_id, _latlng } = layer;
      // const { lat, lng } = _latlng;
      setMapLayer((layers) => [
        ...layers,
        {
          id: _leaflet_id,
          coordinates: _latlng,
        },
      ]);
      console.log(_latlng);
    }
  };

  const onEdited = (e) => {
    console.log(e);
    const {
      layers: { _layers },
    } = e;
    Object.values(_layers).map(({ _leaflet_id, editing }) => {
      setMapLayer((layers) =>
        layers.map((l) =>
          l.id === _leaflet_id
            ? { ...l, coordinates: { ...editing._marker._latlng } }
            : l
        )
      );
    });
  };
  const onDeleted = (e) => {
    console.log(e);
    const {
      layers: { _layers },
    } = e;
    Object.values(_layers).map(({ _leaflet_id }) => {
      setMapLayer((layers) => layers.filter((l) => l.id !== _leaflet_id));
    });
  };

  const handleSubmit = () => {
    // if (!isToado) {
    //   setError("Lỗi nhập tọa độ!!! Vui lòng reload lại trang ");
    //   return;
    // }
    const lat = mapLayer[0].coordinates.lat;
    const lng = mapLayer[0].coordinates.lng;
    axios
      .post(`/loadChungCu`, {
        tenchungcu: tenchungcu,
        lat: lat,
        lng: lng,
        diachi: diachi,
        tenduong: tenduong,
        quan: quan,
      })
      .then((response) => {
        console.log("Đăng bài thành công!!!");
        props.history.push("/");
      })
      .catch((error) => {
        if (error.response.status === 400)
          setError(error.response.data.message);
        if (error.response.status === 401)
          setError(error.response.data.message);
        if (error.response.status === 403)
          setError(error.response.data.message);
        else {
          setError("Lỗi. Vui lòng thử lại lần nữa !");
          console.log(error);
        }
      });
  };
  const handleCancel = () => {
    props.history.push("/");
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
                Thêm
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
          <div className="auth-inner-chungcu">
            <form>
              <h3>Thêm chung cư</h3>
              <div className="form-group">
                <label htmlFor="juridical">
                  Quận <label className="requirelbl">*</label>
                </label>
                <select
                  className="form-control"
                  id="district"
                  onChange={(e) => {
                    setQuan(e.target.value);
                  }}
                >
                  <option value="2" default>
                    Ninh Kiều
                  </option>
                  <option value="1">Cái Răng</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  Tên chung cư<label className="requirelbl">*</label>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={tenchungcu}
                  onChange={(val) => setTenChungCu(val.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  className="form-control"
                  value={diachi}
                  onChange={(val) => setDiaChi(val.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="apartment">
                  Tên đường <label className="requirelbl">*</label>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={tenduong}
                  onChange={(val) => setTenDuong(val.target.value)}
                />
              </div>
              <label htmlFor="title">
                Chọn tọa độ <label className="requirelbl">*</label>{" "}
              </label>
              <div id="map">
                <MapContainer
                  style={{ height: "50vh", width: "100%" }}
                  center={[10.030238227, 105.772118568]}
                  zoom={17}
                  scrollWheelZoom={true}
                >
                  <FeatureGroup>
                    <EditControl
                      position="topleft"
                      onCreated={onCreated}
                      onEdited={onEdited}
                      onDeleted={onDeleted}
                      draw={{
                        rectangle: false,
                        polyline: false,
                        circle: false,
                        circlemarker: false,
                        polygon: false,
                        marker: {
                          icon: new L.DivIcon({
                            iconSize: new L.Point(8, 8),
                            className: "leaflet-div-icon leaflet-editing-icon",
                          }),
                          shapeOptions: {
                            guidelineDistance: 10,
                            color: "navy",
                            weight: 3,
                          },
                        },
                      }}
                    />
                  </FeatureGroup>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </MapContainer>
              </div>
              {error && <div className="error">{error}</div>}
              <p styles={{ color: "red" }}>* Bắt buộc</p>
              <div className="d-grid gap-2">
                <button
                  onClick={handleSubmit}
                  className="btn-custom"
                  type="button"
                >
                  Thêm
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

export default AddChungCu;
