import React, { useState, useEffect } from "react";
import { Map, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "react-leaflet/dist/react-leaflet.min.js";
import "react-leaflet/dist/react-leaflet.js";
import "../index.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import axios from "axios";
import { Link } from "react-router-dom";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function addChungCu() {
  const [mapLayer, setMapLayer] = useState([]);
  const [tenchungcu, setTenChungCu] = useState();
  const [toado, setToaDo] = useState([]);
  const [diachi, setDiaChi] = useState([]);
  const [tenduong, setTenDuong] = useState([]);
  const [quan, setQuan] = useState([]);
  const [dbduong, setDBTenDuong] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/tenduong")
      .then((response) => {
        setDBTenDuong(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const onCreated = (e) => {
    console.log(e);
    const { layerType, layer } = e;
    if (layerType === "marker") {
      // const {_icon} = icon;
      const { _leaflet_id, _latlng } = layer;
      const { lat, lng } = _latlng;
      setToaDo((layers) => [
        ...layers,
        {
          // id: _leaflet_id,
          type: layerType,
          coordinates: (lat, lng),
        },
      ]);
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
            ? { ...l, coordinates: { ...editing.latlngs[0] } }
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

  const handleSubmit = () => {};
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
                <label>Tên chung cư</label>
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
                <select
                  className="form-control"
                  id="apartment"
                  onChange={(e) => {
                    setTenDuong(e.target.value);
                  }}
                >
                  {dbduong.map((item) => {
                    return (
                      <option key={item.tenduong} value={item.tenduong}>
                        {item.tenduong}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label htmlFor="title">
                Chọn tọa độ <label className="requirelbl">*</label>{" "}
              </label>
              {toado}
              <div id="map">
                <Map
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
                        rectangle: true,
                        polyline: true,
                        circle: true,
                        circlemarker: false,
                        marker: true,
                      }}
                    />
                  </FeatureGroup>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </Map>
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

export default addChungCu;
