import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import BlueIcon from "../Leaflet/css/images/blueicon.png";
import Female from "../Images/female.png";
import Male from "../Images/male.jpg";
import { getUser } from "../Utils/Common";

function Itemdetail(props) {
  const usr = getUser();
  const itemId = props.match.params.id;
  const [Item, setItem] = useState({});
  let usrid;

  if (getUser()) {
    usrid = usr.user_id;
  } else {
    usrid = 0;
  }

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
        console.log("shfk");
      });
  }, []);

  if (Item.toado && Item.toado.x) {
    console.log(Item.toado.y);
  }

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
  if (usrid === Item.userid) {
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

  let img;
  if (Item.ismale === "1") {
    console.log(Item.ismale);
    img = <img className="detail-img-avatar" src={Male} alt="Card image cap" />;
  } else {
    img = (
      <img className="detail-img-avatar" src={Female} alt="Card image cap" />
    );
  }

  let noithat;
  if (Item.noithat === "1") {
    noithat = <span>Trống</span>;
  } else if (Item.noithat === "2") {
    noithat = <span>Cơ bản</span>;
  } else {
    noithat = <span>Đầy đủ</span>;
  }

  let phaply;
  if (Item.phaply === "1") {
    phaply = <span>Đang chờ sổ</span>;
  } else if (Item.noithat === "2") {
    phaply = <span>Sổ hồng</span>;
  } else {
    phaply = <span>Sổ đỏ</span>;
  }

  return (
    <div>
      {nav}
      <div className="auth-wrapper-itemdetail">
        <div className="auth-inner-detail">
          <div className="item-page-detail">
            <div className="container">
              <div className="row">
                <div className="col-sm-8">
                  <img className="item-img" src={Item.hinhanh} />
                </div>
                <div className="col-sm-4">
                  <div className="card" style={{ width: "100%" }}>
                    <div style={{ textAlign: "center" }} className="card-body">
                      <h5 className="card-title">Thông tin người đăng</h5>
                      <div>{img}</div>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        🔎 Họ tên: <span>{Item.fullname}</span>
                      </li>
                      <li className="list-group-item">
                        📞 Số điện thoại: <span>{Item.phonenumber}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="container-info-detail"
              style={{ marginTop: "15px" }}
            >
              <h4 className="item-name">{Item.tieude}</h4>
              <hr />
              <div className="row">
                <div className="col-sm-2">
                  <p>
                    Mức giá <br /> <span> {Item.mucgia} triệu/m2</span>{" "}
                  </p>
                </div>
                <div className="col-sm-2">
                  <p>
                    Diện tích <br /> <span> {Item.dientich} m2</span>{" "}
                  </p>
                </div>
                <div className="col-sm-2">
                  <p>
                    Số phòng ngủ <br /> <span> {Item.sophongngu} phòng</span>{" "}
                  </p>
                </div>
              </div>
              <hr />
              <h5>Thông tin mô tả</h5>
              <div>{Item.mota}</div>
              <hr />
              <h5>Thông tin chi tiết</h5>
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    ▨ Diện tích: <span>{Item.dientich} m2</span>
                  </p>
                  <p>
                    💰 Giá bán: <span>{Item.mucgia} triệu/m2</span>
                  </p>
                  <p>
                    🏢 Tầng số: <span>{Item.tangso}</span>
                  </p>
                  <p>
                    ⛺ Số phòng ngủ: <span>{Item.sophongvs} phòng</span>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    🚽 Số phòng vệ sinh: <span> {Item.sophongvs} phòng </span>{" "}
                  </p>
                  <p>
                    🧺️ Nội thất: <span>{noithat}</span>
                  </p>
                  <p>
                    📝 Pháp lý: <span>{phaply}</span>
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <h5>Xem trên bản đồ</h5>
            <div>
              {Item.toado && (
                <MapContainer
                  className="map"
                  center={[Item.toado.y, Item.toado.x]}
                  zoom={16}
                  scrollWheelZoom={true}
                  style={{ height: 400, width: 1020 }}
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <Marker
                    position={[Item.toado.y, Item.toado.x]}
                    icon={L.icon({ iconUrl: BlueIcon })}
                  >
                    <Popup style={{ textAlign: "center" }}>
                      <img
                        className="img-popup"
                        src={Item.hinhanh}
                        style={{ width: 200 }}
                      />
                      <p style={{ fontSize: 20 }}>❝{Item.tenchungcu}❞</p>
                      <div>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "#e17055",
                            fontSize: "20px",
                          }}
                          to={`/routeMap/${Item.toado.x}/${Item.toado.y}`}
                        >
                          Chỉ đường 🚗
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
    </div>
  );
}

export default Itemdetail;

// //
// import { Link } from "react-router-dom";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import L from "leaflet";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import BlueIcon from "../Leaflet/css/images/blueicon.png";
// import { getUser } from "../Utils/Common";
// // import { Alert } from "bootstrap";
// // import "bootstrap/dist/js/popper.min.js";
// function Itemdetail(props) {
//   const usr = getUser();
//   const itemId = props.match.params.id;
//   const [Item, setItem] = useState([]);

//   useEffect(() => {
//     axios
//       .post("/baidang/id", {
//         idbaidang: itemId,
//       })
//       .then((res) => {
//         setItem(res.data[0]);
//         console.log(res.data[0]);
//         //Return Object in Array
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const idbaidang = Item.idbaidang;
//   const handleDelete = () => {
//     if (window.confirm("Xác nhận xóa !!!")) {
//       axios
//         .delete(`/delBaiDang/${idbaidang}`)
//         .then((response) => {
//           console.log("Xóa bài đăng thành công");
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//     props.history.push("/");
//   };

//   let nav;
//   if (usr.user_id === Item.userid) {
//     nav = (
//       <nav className="navbar navbar-expand navbar-light fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to={"/"}>
//             Trang chủ
//           </Link>
//           <div className="collapse navbar-collapse justify-content-end">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <button className="btn-custom" onClick={handleDelete}>
//                   Xóa bài đăng
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   } else {
//     nav = (
//       <nav className="navbar navbar-expand navbar-light fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to={"/"}>
//             Trang chủ
//           </Link>
//         </div>
//       </nav>
//     );
//   }

//   //const photo = require(`../Images/${Item.url}`).default;
//   return (
//     <div>
//       <br />
//       <br />
//       <br />
//       {nav}
//       <div className="item-page-detail">
//         <h1 className="item-name">{Item.tieude}</h1>
//         <div className="item-info">
//           <span className="item-img">
//             <img src={Item.hinhanh} height="10%" width="50%" />
//           </span>
//           <span className="item-detail">
//             <div>
//               <div>
//                 <h4>Thông tin nhà bán</h4>
//                 <div>
//                   <span>Giá bán: {Item.mucgia} triệu ||</span>
//                   <span>Diện tích: {Item.dientich} m2</span>
//                 </div>
//                 <div>
//                   <span>Vị trí tầng ở: Tầng {Item.tangso} ||</span>
//                   <span>Số phòng ngủ: {Item.sophongngu} ||</span>
//                   <span>Số phòng vệ sinh: {Item.sophongvs}</span>
//                 </div>
//                 <div>
//                   <span>Nội thất: {Item.noithat} ||</span>
//                   <span>Pháp lí: {Item.phapli}</span>
//                 </div>
//               </div>
//               <br />
//               <div>
//                 <h4>Mô tả</h4>
//                 <div>
//                   {/* {Item.toado} */}
//                   {Item.mota}
//                 </div>
//               </div>
//             </div>
//           </span>
//           <div>
//             <div className="map">
//               <Map
//                 className="map"
//                 center={[10.030948, 105.769099]}
//                 zoom={12}
//                 scrollWheelZoom={true}
//               >
//                 <TileLayer
//                   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 {/* <Marker
//                   position={Item.toado}
//                   icon={L.icon({ iconUrl: BlueIcon })}
//                 >
//                   <Popup>{Item.tenchungcu}</Popup>
//                 </Marker> */}
//               </Map>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Itemdetail;
